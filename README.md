# vega-themes

Themes for stylized [Vega](https://vega.github.io/vega/) and [Vega-Lite](https://vega.github.io/vega-lite/) visualizations. For Vega version 3 and Vega-Lite 2.

A Vega *theme* is a [configuration object](https://vega.github.io/vega/docs/config/)
with default settings for a variety of visual properties such as colors, typefaces,
line widths and spacing. This module exports a set of named themes, which can be
passed as input to the Vega or Vega-Lite with [Vega-Embed](https://github.com/vega/vega-embed)
or directly as a configuration object to the [Vega parser](https://vega.github.io/vega/docs/api/parser/).

```js
var runtime = vegaEmbed(el, spec, {config: vega.themes.quartz});
```

Once instantiated, a visualization theme can not be changed. Instead, the
input specification must be re-parsed with a new theme.

## Included Themes

<a name="excel" href="#excel">#</a>
vega.themes.<b>excel</b>
[<>](https://github.com/vega/vega-themes/blob/master/src/theme-excel.js "Source")

Chart theme modeled after Microsoft Excel.

<a name="ggplot2" href="#ggplot2">#</a>
vega.themes.<b>ggplot2</b>
[<>](https://github.com/vega/vega-themes/blob/master/src/theme-ggplot2.js "Source")

Chart theme modeled after ggplot2.

<a name="quartz" href="#quartz">#</a>
vega.themes.<b>quartz</b>
[<>](https://github.com/vega/vega-themes/blob/master/src/theme-quartz.js "Source")

Chart theme modeled after Quartz.

<a name="vox" href="#vox">#</a>
vega.themes.<b>vox</b>
[<>](https://github.com/vega/vega-themes/blob/master/src/theme-vox.js "Source")

Chart theme modeled after Vox.

<a name="dark" href="#dark">#</a>
vega.themes.<b>dark</b>
[<>](https://github.com/vega/vega-themes/blob/master/src/theme-dark.js "Source")

A dark theme.

## Instructions

To view and test different themes, follow these steps:

1. Install dependencies via `yarn`.
2. Launch a local web server in the top-level directory with `yarn start`.
3. Load the examples in your browser (at `http://localhost:8000/test/`).
