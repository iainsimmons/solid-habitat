declare module 'solid-habitat' {
  import type { VoidComponent } from 'solid-js';

  /**
   * Extend props to allow an optional `contents` prop
   * containing a list of Nodes from the original DOM element.
   */
  export declare type HabitatComponentProps<P = {}> = P & {
    contents?: Node[];
  };

  /**
   * `HabitatComponent` allows an optional `contents` prop
   * containing a list of Nodes from the original DOM element.
   *
   * Note: There's no way to pass JSX children to a Habitat Component.
   * Use `contents` instead (for basic HTML children),
   * along with Solid's <Dynamic /> component, OR
   * render the Nodes' outerHTML with the `innerHTML` attribute
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
