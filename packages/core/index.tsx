/* @refresh reload */
import type { Component } from 'solid-js';
import { Dynamic, render } from 'solid-js/web';
import toCamelCase from './utils/toCamelCase';
import toKebabCase from './utils/toKebabCase';
import toPascalCase from './utils/toPascalCase';

export default function SolidHabitat(componentEntries) {
  const roots = document.querySelectorAll('[data-component]');

  roots.forEach((root) => {
    const { component, ...otherProps } = root.dataset;
    const dataProps = Object.entries(otherProps ?? {}).reduce(
      (props, [key, value]) => {
        if (key.startsWith('propN')) {
          props[toCamelCase(key.substring(5))] = parseFloat(value);
        } else if (
          key.startsWith('propB') &&
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
    const foundComponent = componentEntries.find(
      ([path]) =>
        path.includes(`/${component}.`) ||
        path.includes(`/${component}/index.`) ||
        path.includes(`/${component}/${toPascalCase(component)}.`) ||
        path.includes(`/${toKebabCase(component)}/${toKebabCase(component)}.`)
    )?.[1];
    console.log({ foundComponent, type: typeof foundComponent });

    const Component =
      typeof foundComponent === 'function'
        ? foundComponent
        : foundComponent?.default || null;

    let scriptProps;
    try {
      scriptProps = JSON.parse(propsScript?.textContent || '{}');
    } catch (err) {
      console.error(err);
      scriptProps = {};
    }

    render(
      () => <Dynamic component={Component} {...dataProps} {...scriptProps} />,
      root
    );
  });
}
