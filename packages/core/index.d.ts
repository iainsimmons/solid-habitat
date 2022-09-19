declare module 'solid-habitat' {
  import type { VoidComponent } from 'solid-js';

  /**
   * Extend props to allow an optional `contents` prop
   * containing a HTMLCollection of the original DOM element's children.
   */
  export declare type HabitatComponentProps<P = {}> = P & {
    contents: HTMLCollection;
  };

  /**
   * `HabitatComponent` allows an optional `contents` prop
   * containing a HTMLCollection of the original DOM element's children.
   *
   * Note: There's no way to pass JSX children to a Habitat Component.
   * For rendering the `contents`, use Solid's <Dynamic /> component
   * (OR innerHTML, at your own risk!)
   */
  export declare type HabitatComponent = VoidComponent<
    HabitatComponentProps<P>
  >;

  /**
   * An object with component paths as keys,
   * and values which are promises that return a module
   * with a Solid.js Component as the default export.
   *
   * Note: Vite's import.meta.glob will give you this by default.
   * See https://vitejs.dev/guide/features.html#glob-import
   */
  export declare type HabitatComponentMap = Record<
    string,
    () => Promise<{ default: HabitatComponent<HabitatComponentProps> }>
  >;

  /**
   * A library for loading Solid.js components and props from HTML.
   * @param componentMap {HabitatComponentMap}
   */
  export declare function SolidHabitat(componentMap: HabitatComponentMap): void;
}
