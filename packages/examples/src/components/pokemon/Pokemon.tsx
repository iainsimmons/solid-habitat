import { createResource, Switch, Match, createSignal } from 'solid-js';
import './pokemon.css';

const fetchPokemon = async (pokemon: string) =>
  (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();

interface Props {
  pokemonId: string;
}

export default function Pokemon(props: Props) {
  const [pokeId, setPokeId] = createSignal(props.pokemonId);
  const [pokemonData] = createResource(pokeId, fetchPokemon);
  return (
    <div class="pokemon__container">
      <Switch fallback={<>Select a pokemon to see info</>}>
        <Match when={pokemonData.loading}>
          <img
            class="pokemon__image"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' class='img-fluid rounded mx-auto d-block' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23fff'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23333333'%3Eloading…%3C/text%3E%3C/svg%3E%3C!--%3Ca download='FILENAME.png' href='data:image/png;base64,asdasd...'%3EDownload%3C/a%3E--%3E"
            alt="loading…"
          />
          <p class="pokemon__info">
            <b>Name:</b>
          </p>
          <p class="pokemon__info">
            <b>Number:</b>
          </p>
          <button disabled>Next</button>
        </Match>
        <Match when={pokemonData.error}>{pokemonData.error}</Match>
        <Match when={pokemonData()}>
          <img
            class="pokemon__image"
            src={pokemonData()?.sprites?.front_default}
            alt={pokemonData()?.name}
          />
          <p class="pokemon__info">
            <b>Name:</b> {pokemonData().name}
          </p>
          <p class="pokemon__info">
            <b>Number:</b> {pokemonData().id}
          </p>
          <button
            onClick={() => {
              setPokeId(String(Number(pokeId()) + 1));
            }}
          >
            Next
          </button>
        </Match>
      </Switch>
    </div>
  );
}
