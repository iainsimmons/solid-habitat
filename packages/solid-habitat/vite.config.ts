import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: './index.tsx',
      name: 'SolidHabitat',
      // the proper extensions will be added
      fileName: 'solid-habitat',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['solid-js'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'solid-js': 'Solid',
        },
      },
    },
  },
});
