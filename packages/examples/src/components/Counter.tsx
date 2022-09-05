import { Component, createSignal } from 'solid-js';

interface Props {
  initialCount?: number;
}

const Counter: Component = (props: Props) => {
  const [count, setCount] = createSignal(props.initialCount ?? 0);

  return (
    <button
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      {count()}
    </button>
  );
};

export default Counter;
