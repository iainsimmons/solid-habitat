import { createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import './call-to-action.css';

interface Props {
  backgroundColor?: string;
}

const CallToAction = (props: Props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div>
      <button
        class="cta_button"
        style={{ backgroundColor: props.backgroundColor }}
        onClick={() => setIsOpen(true)}
      >
        All expenses paid island vacation. Click to enter!
      </button>

      {isOpen() && (
        <Portal mount={document.body}>
          <div
            classList={{ cta__modal: true, 'cta__modal--visible': isOpen() }}
          >
            <p>Portals work here too!</p>
            <button class="cta_button" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </Portal>
      )}
      {isOpen() && (
        <Portal mount={document.body}>
          <div
            classList={{
              'cta__modal-dimmer': true,
              'cta__modal-dimmer--visible': isOpen(),
            }}
            onClick={() => setIsOpen(false)}
          />
        </Portal>
      )}
    </div>
  );
};

export default CallToAction;
