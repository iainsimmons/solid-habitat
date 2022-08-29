import { createSignal } from 'solid-js';

interface Props {
  initialCount?: number;
}

export default function Counter(props: Props) {
  const [count, setCount] = createSignal(props.initialCount || 0);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}
