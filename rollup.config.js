import json from "@rollup/plugin-json";

export default {
  input: 'build/src/index.js',
  output: {
    file: 'build/vega-themes.js',
    format: 'umd',
    sourcemap: true,
    name: 'vegaThemes',
    exports: 'named'
  },
  plugins: [json()]
};
