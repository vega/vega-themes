import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';
import bundleSize from 'rollup-plugin-bundle-size';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const plugins = (browserslist, declaration) => [
  resolve({ extensions: ['.js', '.ts'] }),
  commonjs(),
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
      file: 'build/vega-themes.module.js',
      format: 'esm'
    },
    plugins: plugins(undefined, true),
    external: [...Object.keys(pkg.peerDependencies)]
  }, {
    input: 'src/index.ts',
    output: [
      {
        file: `build/vega-themes.js`,
        format: 'umd',
        name: 'vegaThemes',
        exports: 'named'
      },
      {
        file: `build/vega-themes.min.js`,
        format: 'iife',
        name: 'vegaThemes',
        exports: 'named',
        plugins: [terser()]
      }
    ],
    plugins: plugins('defaults and not IE 11', false),
    external: ['vega', 'vega-lite']
  }
];

export default outputs;
