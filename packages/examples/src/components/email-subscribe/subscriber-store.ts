import { createStore } from 'solid-js/store';

export type Subscriber = {
  name: string;
  email: string;
};

export default createStore<Subscriber>({ name: '', email: '' });
