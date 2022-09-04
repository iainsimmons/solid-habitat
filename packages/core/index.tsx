/* @refresh reload */
import type { Component } from 'solid-js';
import { Dynamic, render } from 'solid-js/web';
import toKebabCase from './utils/toKebabCase';
import toPascalCase from './utils/toPascalCase';

export default function SolidHabitat(componentEntries) {
  const roots = document.querySelectorAll('[data-component]');

  roots.forEach((root) => {
    const { component, ...dataProps } = root.dataset;
    const propsScript = root.querySelector('script[type="text/props"]');
    const Component =
      componentEntries.find(
        ([path]) =>
          path.includes(`/${component}.`) ||
          path.includes(`/${component}/index.`) ||
          path.includes(`/${component}/${toPascalCase(component)}.`) ||
          path.includes(`/${toKebabCase(component)}/${toKebabCase(component)}.`)
      )?.[1]?.default || null;

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
