import { For } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import DOMPurify from 'dompurify';

export default function WithHtmlContent(props) {
  return (
    <div class="has-content">
      <p>
        Some (sanitised) HTML content available as a <code>HTMLCollection</code>
        , with <code>styled</code> class added to each{' '}
        <code>&lt;Dynamic /&gt;</code>:
      </p>
      <For each={props.contents}>
        {(node) => (
          <Dynamic
            component={node.localName}
            innerHTML={DOMPurify.sanitize(node.innerHTML)}
            class="styled"
          />
        )}
      </For>
    </div>
  );
}
