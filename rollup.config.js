export default {
  input: "build/index.js",
  output: {
    file: "build/vega-themes.js",
    format: "umd",
    sourcemap: true,
    name: "vegaThemes",
    exports: "named"
  }
};
