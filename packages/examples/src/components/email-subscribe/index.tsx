import subscriberStore from './subscriber-store';
import './email-subscribe.css';
import { Show } from 'solid-js';

const [subscriber, setSubscriber] = subscriberStore;

interface Props {
  showEmail: boolean;
  showName: boolean;
}

export default function EmailSubscribe(props: Props) {
  return (
    <div class="email__container">
      <p class="email__title">Join our newsletter</p>
      <form
        onSubmit={() => {
          alert(
            `Submitted with: ${[subscriber.name, subscriber.email]
              .filter(Boolean)
              .join(', ')}`
          );
        }}
      >
        <Show when={props.showName}>
          <label class="email__input">
            Name
            <input
              name="name"
              onInput={(e: any) => setSubscriber({ name: e.target.value })}
            />
          </label>
        </Show>

        <Show when={props.showEmail}>
          <label class="email__input">
            Email
            <input
              name="email"
              onInput={(e: any) => setSubscriber({ email: e.target.value })}
            />
          </label>
        </Show>
        <button class="email__submit">Sign up</button>
      </form>
    </div>
  );
}
