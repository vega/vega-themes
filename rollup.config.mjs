import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import ts from 'rollup-plugin-ts';

import pkg from './package.json' assert { type: 'json' };

const plugins = (browserslist, declaration) => [
  resolve(),
  json(),
  ts({
    tsconfig: (resolvedConfig) => ({
      ...resolvedConfig,
      declaration,
      declarationMap: declaration
    }),
    browserslist
  }),
  bundleSize()
];

const outputs = [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: plugins(false, true)
  }, {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'vegaThemes',
        exports: 'named'
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'vegaThemes',
        exports: 'named',
        plugins: [terser()]
      }
    ],
    plugins: plugins('defaults', false),
  }
];

export default outputs;
