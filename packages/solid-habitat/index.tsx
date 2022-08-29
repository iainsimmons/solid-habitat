import { widgetDOMHostElements, solidRender } from './lib';

const habitat = (Widget) => {
  // Widget represents the Solid component we need to mount
  let widget = Widget;
  // preact root render helper
  let root = null;

  let render = ({
    selector = null,
    inline = false,
    clean = false,
    clientSpecified = false,
    defaultProps = {},
  } = {}) => {
    let elements = widgetDOMHostElements({
      selector,
      inline,
      clientSpecified,
    });
    let loaded = () => {
      if (elements.length > 0) {
        let elements = widgetDOMHostElements({
          selector,
          inline,
          clientSpecified,
        });

        return solidRender(widget, elements, root, clean, defaultProps);
      }
    };
    loaded();
    document.addEventListener('DOMContentLoaded', loaded);
    document.addEventListener('load', loaded);
  };

  return { render };
};

export default habitat;
