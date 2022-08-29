import habitat from 'solid-habitat';
import Counter from './Counter';

function init() {
  let counter = habitat(Counter);
  /**
   * option 1: render inline
   */
  counter.render({
    inline: true,
    clean: false,
  });

  /**
   * option 2: render in selector
   */
  // counter.render({
  //   selector: ".widget-container",
  //   inline: false,
  //   clean: false
  // });

  /**
   * option 3: render in cleinet specified
   */
  // counter.render({
  //   clientSpecified: true
  //   inline: false,
  //   clean: false
  // });
}

init();
