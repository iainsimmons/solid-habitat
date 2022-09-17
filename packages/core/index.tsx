import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Dynamic, render } from 'solid-js/web';
import type { HabitatComponentMap } from './index';
import {
  cleanHtml,
  matchComponentPath,
  toCamelCase,
  toKebabCase,
  toPascalCase,
} from './utils';

/**
 * A library for loading Solid.js components and props from HTML.
 * @param componentMap {HabitatComponentMap} An object with component paths as keys, and values which are promises that return a module with a Solid.js Component as the default export.
 */
export function SolidHabitat(componentMap: HabitatComponentMap) {
  const roots = document.querySelectorAll('[data-habitat]');

  roots.forEach((root) => {
    const { habited, habitat: component, ...otherProps } = root.dataset;

    const dataProps = Object.entries(otherProps ?? {}).reduce(
      (props, [key, value]) => {
        if (key.startsWith('nProp')) {
          props[toCamelCase(key.substring(5))] = parseFloat(value);
        } else if (
          key.startsWith('bProp') &&
          ['true', 'false'].includes(value)
        ) {
          props[toCamelCase(key.substring(5))] = JSON.parse(value);
        } else if (key.startsWith('prop')) {
          props[toCamelCase(key.substring(4))] = value;
        }
        return props;
      },
      {}
    );
    const propsScript = root.querySelector('script[type="text/props"]');
    const innerHTML = root.innerHTML;
    if (propsScript || innerHTML) {
      root.innerHTML = '';
    }
    const matchingModule = Object.entries(componentMap).find(([path]) =>
      matchComponentPath(path, component)
    )?.[1];

    if (!matchingModule) {
      root.setAttribute('data-habited', 'false');
      return;
    }

    const ComponentToRender = lazy(matchingModule);

    let scriptProps;
    try {
      scriptProps = JSON.parse(propsScript?.textContent || '{}');
    } catch (err) {
      console.error(err);
      scriptProps = {};
    }

    if (!habited) {
      render(
        () => (
          <Dynamic
            component={ComponentToRender}
            {...dataProps}
            {...scriptProps}
            contents={cleanHtml(innerHTML, true)}
          />
        ),
        root
      );
      root.setAttribute('data-habited', 'true');
    }
  });
}
