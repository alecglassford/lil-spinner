import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'Spinner.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    file: 'build/bundle.js',
    name: '_lilSpinner'
  },
  plugins: [
    svelte({
      dev: !production,
      customElement: true,
      tag: 'lil-spinner'
    }),
    resolve(),
    production && terser()
  ]
};
