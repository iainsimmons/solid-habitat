/* @refresh reload */
import { SolidHabitat } from 'solid-habitat';
import './index.css';

const componentMap = import.meta.glob('./components/**/*.[jt]sx');

SolidHabitat({ ...componentMap, './App.tsx': () => import('./App.tsx') });
