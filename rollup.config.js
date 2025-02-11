import json from '@rollup/plugin-json';
import bundleSize from 'rollup-plugin-bundle-size';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' with {type: 'json'};

const outputs = [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.exports.default,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [json(), typescript(), bundleSize()],
  },
];

export default outputs;
