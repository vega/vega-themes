# vega-themes

Themes for stylized Vega visualizations. For Vega version 3.0+.

A Vega *theme* is a configuration object with default settings for a variety
of visual properties such as colors, typefaces, line widths and spacing. This
module exports a set of named themes, which can be passed as input to the Vega
parser:

```js
var runtime = vega.parse(vega_spec, vega.themes.quartz);
var view = new vega.View(runtime);
```

Once instantiated, a visualization theme can not be changed. Instead, the
input specification must be re-parsed with a new theme and a new `View`
instance must be created.

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

## Instructions

To view and test different themes, follow these steps:

1. Install dependencies via `npm install`.
2. Launch a local web server in the top-level directory (e.g., `python -m SimpleHTTPServer 8000`).
3. Load the examples in your browser (e.g., at `http://localhost:8000/test/`).
