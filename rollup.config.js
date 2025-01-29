import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' with {type: 'json'};

const outputs = [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.exports,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [json(), typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.unpkg,
      format: 'umd',
      sourcemap: true,
      name: 'vegaThemes',
      exports: 'named',
    },
    plugins: [json(), typescript(), terser(), bundleSize()],
  },
];

export default outputs;
