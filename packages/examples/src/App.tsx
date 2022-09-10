import { Index } from 'solid-js';
import { createStore } from 'solid-js/store';

const initialCounts = [1, 2, 3, 4];
export const [counts, setCounts] = createStore(initialCounts);

export default function App() {
  return (
    <div>
      <h3>App</h3>
      <p>
        Uses a global store! Check out the modal from the call to action button
        below.
      </p>
      <p>
        <button
          onClick={() =>
            setCounts((_counts) => _counts.map((count) => count + 1))
          }
        >
          Increment all
        </button>
      </p>
      <Index each={counts}>
        {(item: number, index: number) => (
          <button
            onClick={() => {
              setCounts(index, (count) => count + 1);
            }}
          >
            {counts[index]}
          </button>
        )}
      </Index>
    </div>
  );
}
