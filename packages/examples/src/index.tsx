/* @refresh reload */
import SolidHabitat from 'solid-habitat';
import './index.css';

const components = import.meta.glob('./components/**/*.[jt]sx', {
  eager: true,
});

const componentEntries = Object.entries(components);

SolidHabitat(componentEntries);
