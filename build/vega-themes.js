(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vegaThemes = {}));
})(this, (function (exports) { 'use strict';

  var name = "vega-themes";
  var version$1 = "2.10.0";
  var description = "Themes for stylized Vega and Vega-Lite visualizations.";
  var keywords = [
  	"vega",
  	"vega-lite",
  	"themes",
  	"style"
  ];
  var license = "BSD-3-Clause";
  var author = {
  	name: "UW Interactive Data Lab",
  	url: "https://idl.cs.washington.edu"
  };
  var contributors = [
  	{
  		name: "Emily Gu",
  		url: "https://github.com/emilygu"
  	},
  	{
  		name: "Arvind Satyanarayan",
  		url: "http://arvindsatya.com"
  	},
  	{
  		name: "Jeffrey Heer",
  		url: "https://idl.cs.washington.edu"
  	},
  	{
  		name: "Dominik Moritz",
  		url: "https://www.domoritz.de"
  	}
  ];
  var main = "build/vega-themes.js";
  var module = "build/vega-themes.module.js";
  var unpkg = "build/vega-themes.min.js";
  var jsdelivr = "build/vega-themes.min.js";
  var types = "build/vega-themes.module.d.ts";
  var repository = {
  	type: "git",
  	url: "https://github.com/vega/vega-themes.git"
  };
  var files = [
  	"src",
  	"build"
  ];
  var scripts = {
  	prebuild: "yarn clean",
  	build: "rollup -c",
  	clean: "rimraf build && rimraf examples/build",
  	"copy:data": "rsync -r node_modules/vega-datasets/data/* examples/data",
  	"copy:build": "rsync -r build/* examples/build",
  	"deploy:gh": "yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",
  	prepublishOnly: "yarn clean && yarn build",
  	preversion: "yarn lint",
  	serve: "browser-sync start -s -f build examples --serveStatic examples",
  	start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
  	prepare: "beemo create-config",
  	eslintbase: "beemo eslint .",
  	format: "yarn eslintbase --fix",
  	lint: "yarn eslintbase",
  	release: "yarn prepublishOnly && yarn auto shipit"
  };
  var devDependencies = {
  	"@auto-it/conventional-commits": "^10.32.2",
  	"@auto-it/first-time-contributor": "^10.32.2",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^13.0.6",
  	"rollup-plugin-ts": "^1.4.7",
  	auto: "^10.32.2",
  	"browser-sync": "^2.27.7",
  	concurrently: "^6.4.0",
  	"gh-pages": "^3.2.3",
  	rollup: "^2.60.0",
  	"rollup-plugin-bundle-size": "^1.0.3",
  	"rollup-plugin-terser": "^7.0.2",
  	typescript: "^4.4.4",
  	vega: "^5.19.1",
  	"vega-lite": "^5.0.0",
  	"vega-lite-dev-config": "^0.20.0"
  };
  var peerDependencies = {
  	vega: "*",
  	"vega-lite": "*"
  };
  var pkg = {
  	name: name,
  	version: version$1,
  	description: description,
  	keywords: keywords,
  	license: license,
  	author: author,
  	contributors: contributors,
  	main: main,
  	module: module,
  	unpkg: unpkg,
  	jsdelivr: jsdelivr,
  	types: types,
  	repository: repository,
  	files: files,
  	scripts: scripts,
  	devDependencies: devDependencies,
  	peerDependencies: peerDependencies
  };

  var lightColor = '#fff';
  var medColor = '#888';
  var darkTheme = {
      background: '#333',
      title: {
          color: lightColor,
          subtitleColor: lightColor
      },
      style: {
          'guide-label': {
              fill: lightColor
          },
          'guide-title': {
              fill: lightColor
          }
      },
      axis: {
          domainColor: lightColor,
          gridColor: medColor,
          tickColor: lightColor
      }
  };

  var markColor$7 = '#4572a7';
  var excelTheme = {
      background: '#fff',
      arc: { fill: markColor$7 },
      area: { fill: markColor$7 },
      line: { stroke: markColor$7, strokeWidth: 2 },
      path: { stroke: markColor$7 },
      rect: { fill: markColor$7 },
      shape: { stroke: markColor$7 },
      symbol: { fill: markColor$7, strokeWidth: 1.5, size: 50 },
      axis: {
          bandPosition: 0.5,
          grid: true,
          gridColor: '#000000',
          gridOpacity: 1,
          gridWidth: 0.5,
          labelPadding: 10,
          tickSize: 5,
          tickWidth: 0.5
      },
      axisBand: {
          grid: false,
          tickExtra: true
      },
      legend: {
          labelBaseline: 'middle',
          labelFontSize: 11,
          symbolSize: 50,
          symbolType: 'square'
      },
      range: {
          category: [
              '#4572a7',
              '#aa4643',
              '#8aa453',
              '#71598e',
              '#4598ae',
              '#d98445',
              '#94aace',
              '#d09393',
              '#b9cc98',
              '#a99cbc',
          ]
      }
  };

  var markColor$6 = '#30a2da';
  var axisColor$2 = '#cbcbcb';
  var guideLabelColor = '#999';
  var guideTitleColor = '#333';
  var backgroundColor$2 = '#f0f0f0';
  var blackTitle = '#333';
  var fiveThirtyEightTheme = {
      arc: { fill: markColor$6 },
      area: { fill: markColor$6 },
      axis: {
          domainColor: axisColor$2,
          grid: true,
          gridColor: axisColor$2,
          gridWidth: 1,
          labelColor: guideLabelColor,
          labelFontSize: 10,
          titleColor: guideTitleColor,
          tickColor: axisColor$2,
          tickSize: 10,
          titleFontSize: 14,
          titlePadding: 10,
          labelPadding: 4
      },
      axisBand: {
          grid: false
      },
      background: backgroundColor$2,
      group: {
          fill: backgroundColor$2
      },
      legend: {
          labelColor: blackTitle,
          labelFontSize: 11,
          padding: 1,
          symbolSize: 30,
          symbolType: 'square',
          titleColor: blackTitle,
          titleFontSize: 14,
          titlePadding: 10
      },
      line: {
          stroke: markColor$6,
          strokeWidth: 2
      },
      path: { stroke: markColor$6, strokeWidth: 0.5 },
      rect: { fill: markColor$6 },
      range: {
          category: [
              '#30a2da',
              '#fc4f30',
              '#e5ae38',
              '#6d904f',
              '#8b8b8b',
              '#b96db8',
              '#ff9e27',
              '#56cc60',
              '#52d2ca',
              '#52689e',
              '#545454',
              '#9fe4f8',
          ],
          diverging: ['#cc0020', '#e77866', '#f6e7e1', '#d6e8ed', '#91bfd9', '#1d78b5'],
          heatmap: ['#d6e8ed', '#cee0e5', '#91bfd9', '#549cc6', '#1d78b5']
      },
      point: {
          filled: true,
          shape: 'circle'
      },
      shape: { stroke: markColor$6 },
      bar: {
          binSpacing: 2,
          fill: markColor$6,
          stroke: null
      },
      title: {
          anchor: 'start',
          fontSize: 24,
          fontWeight: 600,
          offset: 20
      }
  };

  var markColor$5 = '#000';
  var ggplot2Theme = {
      group: {
          fill: '#e5e5e5'
      },
      arc: { fill: markColor$5 },
      area: { fill: markColor$5 },
      line: { stroke: markColor$5 },
      path: { stroke: markColor$5 },
      rect: { fill: markColor$5 },
      shape: { stroke: markColor$5 },
      symbol: { fill: markColor$5, size: 40 },
      axis: {
          domain: false,
          grid: true,
          gridColor: '#FFFFFF',
          gridOpacity: 1,
          labelColor: '#7F7F7F',
          labelPadding: 4,
          tickColor: '#7F7F7F',
          tickSize: 5.67,
          titleFontSize: 16,
          titleFontWeight: 'normal'
      },
      legend: {
          labelBaseline: 'middle',
          labelFontSize: 11,
          symbolSize: 40
      },
      range: {
          category: [
              '#000000',
              '#7F7F7F',
              '#1A1A1A',
              '#999999',
              '#333333',
              '#B0B0B0',
              '#4D4D4D',
              '#C9C9C9',
              '#666666',
              '#DCDCDC',
          ]
      }
  };

  var headlineFontSize = 22;
  var headlineFontWeight = 'normal';
  var labelFont$1 = 'Benton Gothic, sans-serif';
  var labelFontSize = 11.5;
  var labelFontWeight = 'normal';
  var markColor$4 = '#82c6df';
  // const markHighlight = '#006d8f';
  // const markDemocrat = '#5789b8';
  // const markRepublican = '#d94f54';
  var titleFont = 'Benton Gothic Bold, sans-serif';
  var titleFontWeight = 'normal';
  var titleFontSize$1 = 13;
  var colorSchemes$1 = {
      'category-6': ['#ec8431', '#829eb1', '#c89d29', '#3580b1', '#adc839', '#ab7fb4'],
      'fire-7': ['#fbf2c7', '#f9e39c', '#f8d36e', '#f4bb6a', '#e68a4f', '#d15a40', '#ab4232'],
      'fireandice-6': ['#e68a4f', '#f4bb6a', '#f9e39c', '#dadfe2', '#a6b7c6', '#849eae'],
      'ice-7': ['#edefee', '#dadfe2', '#c4ccd2', '#a6b7c6', '#849eae', '#607785', '#47525d']
  };
  var latimesTheme = {
      background: '#ffffff',
      title: {
          anchor: 'start',
          color: '#000000',
          font: titleFont,
          fontSize: headlineFontSize,
          fontWeight: headlineFontWeight
      },
      arc: { fill: markColor$4 },
      area: { fill: markColor$4 },
      line: { stroke: markColor$4, strokeWidth: 2 },
      path: { stroke: markColor$4 },
      rect: { fill: markColor$4 },
      shape: { stroke: markColor$4 },
      symbol: { fill: markColor$4, size: 30 },
      axis: {
          labelFont: labelFont$1,
          labelFontSize: labelFontSize,
          labelFontWeight: labelFontWeight,
          titleFont: titleFont,
          titleFontSize: titleFontSize$1,
          titleFontWeight: titleFontWeight
      },
      axisX: {
          labelAngle: 0,
          labelPadding: 4,
          tickSize: 3
      },
      axisY: {
          labelBaseline: 'middle',
          maxExtent: 45,
          minExtent: 45,
          tickSize: 2,
          titleAlign: 'left',
          titleAngle: 0,
          titleX: -45,
          titleY: -11
      },
      legend: {
          labelFont: labelFont$1,
          labelFontSize: labelFontSize,
          symbolType: 'square',
          titleFont: titleFont,
          titleFontSize: titleFontSize$1,
          titleFontWeight: titleFontWeight
      },
      range: {
          category: colorSchemes$1['category-6'],
          diverging: colorSchemes$1['fireandice-6'],
          heatmap: colorSchemes$1['fire-7'],
          ordinal: colorSchemes$1['fire-7'],
          ramp: colorSchemes$1['fire-7']
      }
  };

  var markColor$3 = '#ab5787';
  var axisColor$1 = '#979797';
  var quartzTheme = {
      background: '#f9f9f9',
      arc: { fill: markColor$3 },
      area: { fill: markColor$3 },
      line: { stroke: markColor$3 },
      path: { stroke: markColor$3 },
      rect: { fill: markColor$3 },
      shape: { stroke: markColor$3 },
      symbol: { fill: markColor$3, size: 30 },
      axis: {
          domainColor: axisColor$1,
          domainWidth: 0.5,
          gridWidth: 0.2,
          labelColor: axisColor$1,
          tickColor: axisColor$1,
          tickWidth: 0.2,
          titleColor: axisColor$1
      },
      axisBand: {
          grid: false
      },
      axisX: {
          grid: true,
          tickSize: 10
      },
      axisY: {
          domain: false,
          grid: true,
          tickSize: 0
      },
      legend: {
          labelFontSize: 11,
          padding: 1,
          symbolSize: 30,
          symbolType: 'square'
      },
      range: {
          category: [
              '#ab5787',
              '#51b2e5',
              '#703c5c',
              '#168dd9',
              '#d190b6',
              '#00609f',
              '#d365ba',
              '#154866',
              '#666666',
              '#c4c4c4',
          ]
      }
  };

  var markColor$2 = '#3e5c69';
  var voxTheme = {
      background: '#fff',
      arc: { fill: markColor$2 },
      area: { fill: markColor$2 },
      line: { stroke: markColor$2 },
      path: { stroke: markColor$2 },
      rect: { fill: markColor$2 },
      shape: { stroke: markColor$2 },
      symbol: { fill: markColor$2 },
      axis: {
          domainWidth: 0.5,
          grid: true,
          labelPadding: 2,
          tickSize: 5,
          tickWidth: 0.5,
          titleFontWeight: 'normal'
      },
      axisBand: {
          grid: false
      },
      axisX: {
          gridWidth: 0.2
      },
      axisY: {
          gridDash: [3],
          gridWidth: 0.4
      },
      legend: {
          labelFontSize: 11,
          padding: 1,
          symbolType: 'square'
      },
      range: {
          category: ['#3e5c69', '#6793a6', '#182429', '#0570b0', '#3690c0', '#74a9cf', '#a6bddb', '#e2ddf2']
      }
  };

  var markColor$1 = '#1696d2';
  var axisColor = '#000000';
  var backgroundColor$1 = '#FFFFFF';
  var font = 'Lato';
  var labelFont = 'Lato';
  var sourceFont = 'Lato';
  var gridColor$1 = '#DEDDDD';
  var titleFontSize = 18;
  var colorSchemes = {
      'main-colors': ['#1696d2', '#d2d2d2', '#000000', '#fdbf11', '#ec008b', '#55b748', '#5c5859', '#db2b27'],
      'shades-blue': ['#CFE8F3', '#A2D4EC', '#73BFE2', '#46ABDB', '#1696D2', '#12719E', '#0A4C6A', '#062635'],
      'shades-gray': ['#F5F5F5', '#ECECEC', '#E3E3E3', '#DCDBDB', '#D2D2D2', '#9D9D9D', '#696969', '#353535'],
      'shades-yellow': ['#FFF2CF', '#FCE39E', '#FDD870', '#FCCB41', '#FDBF11', '#E88E2D', '#CA5800', '#843215'],
      'shades-magenta': ['#F5CBDF', '#EB99C2', '#E46AA7', '#E54096', '#EC008B', '#AF1F6B', '#761548', '#351123'],
      'shades-green': ['#DCEDD9', '#BCDEB4', '#98CF90', '#78C26D', '#55B748', '#408941', '#2C5C2D', '#1A2E19'],
      'shades-black': ['#D5D5D4', '#ADABAC', '#848081', '#5C5859', '#332D2F', '#262223', '#1A1717', '#0E0C0D'],
      'shades-red': ['#F8D5D4', '#F1AAA9', '#E9807D', '#E25552', '#DB2B27', '#A4201D', '#6E1614', '#370B0A'],
      'one-group': ['#1696d2', '#000000'],
      'two-groups-cat-1': ['#1696d2', '#000000'],
      'two-groups-cat-2': ['#1696d2', '#fdbf11'],
      'two-groups-cat-3': ['#1696d2', '#db2b27'],
      'two-groups-seq': ['#a2d4ec', '#1696d2'],
      'three-groups-cat': ['#1696d2', '#fdbf11', '#000000'],
      'three-groups-seq': ['#a2d4ec', '#1696d2', '#0a4c6a'],
      'four-groups-cat-1': ['#000000', '#d2d2d2', '#fdbf11', '#1696d2'],
      'four-groups-cat-2': ['#1696d2', '#ec0008b', '#fdbf11', '#5c5859'],
      'four-groups-seq': ['#cfe8f3', '#73bf42', '#1696d2', '#0a4c6a'],
      'five-groups-cat-1': ['#1696d2', '#fdbf11', '#d2d2d2', '#ec008b', '#000000'],
      'five-groups-cat-2': ['#1696d2', '#0a4c6a', '#d2d2d2', '#fdbf11', '#332d2f'],
      'five-groups-seq': ['#cfe8f3', '#73bf42', '#1696d2', '#0a4c6a', '#000000'],
      'six-groups-cat-1': ['#1696d2', '#ec008b', '#fdbf11', '#000000', '#d2d2d2', '#55b748'],
      'six-groups-cat-2': ['#1696d2', '#d2d2d2', '#ec008b', '#fdbf11', '#332d2f', '#0a4c6a'],
      'six-groups-seq': ['#cfe8f3', '#a2d4ec', '#73bfe2', '#46abdb', '#1696d2', '#12719e'],
      'diverging-colors': ['#ca5800', '#fdbf11', '#fdd870', '#fff2cf', '#cfe8f3', '#73bfe2', '#1696d2', '#0a4c6a']
  };
  var urbanInstituteTheme = {
      background: backgroundColor$1,
      title: {
          anchor: 'start',
          fontSize: titleFontSize,
          font: font
      },
      axisX: {
          domain: true,
          domainColor: axisColor,
          domainWidth: 1,
          grid: false,
          labelFontSize: 12,
          labelFont: labelFont,
          labelAngle: 0,
          tickColor: axisColor,
          tickSize: 5,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: font
      },
      axisY: {
          domain: false,
          domainWidth: 1,
          grid: true,
          gridColor: gridColor$1,
          gridWidth: 1,
          labelFontSize: 12,
          labelFont: labelFont,
          labelPadding: 8,
          ticks: false,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: font,
          titleAngle: 0,
          titleY: -10,
          titleX: 18
      },
      legend: {
          labelFontSize: 12,
          labelFont: labelFont,
          symbolSize: 100,
          titleFontSize: 12,
          titlePadding: 10,
          titleFont: font,
          orient: 'right',
          offset: 10
      },
      view: {
          stroke: 'transparent'
      },
      range: {
          category: colorSchemes['six-groups-cat-1'],
          diverging: colorSchemes['diverging-colors'],
          heatmap: colorSchemes['diverging-colors'],
          ordinal: colorSchemes['six-groups-seq'],
          ramp: colorSchemes['shades-blue']
      },
      area: {
          fill: markColor$1
      },
      rect: {
          fill: markColor$1
      },
      line: {
          color: markColor$1,
          stroke: markColor$1,
          strokeWidth: 5
      },
      trail: {
          color: markColor$1,
          stroke: markColor$1,
          strokeWidth: 0,
          size: 1
      },
      path: {
          stroke: markColor$1,
          strokeWidth: 0.5
      },
      point: {
          filled: true
      },
      text: {
          font: sourceFont,
          color: markColor$1,
          fontSize: 11,
          align: 'center',
          fontWeight: 400,
          size: 11
      },
      style: {
          bar: {
              fill: markColor$1,
              stroke: null
          }
      },
      arc: { fill: markColor$1 },
      shape: { stroke: markColor$1 },
      symbol: { fill: markColor$1, size: 30 }
  };

  /**
   * Copyright 2020 Google LLC.
   *
   * Use of this source code is governed by a BSD-style
   * license that can be found in the LICENSE file or at
   * https://developers.google.com/open-source/licenses/bsd
   */
  var markColor = '#3366CC';
  var gridColor = '#ccc';
  var defaultFont = 'Arial, sans-serif';
  var googlechartsTheme = {
      arc: { fill: markColor },
      area: { fill: markColor },
      path: { stroke: markColor },
      rect: { fill: markColor },
      shape: { stroke: markColor },
      symbol: { stroke: markColor },
      circle: { fill: markColor },
      background: '#fff',
      padding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
      },
      style: {
          'guide-label': {
              font: defaultFont,
              fontSize: 12
          },
          'guide-title': {
              font: defaultFont,
              fontSize: 12
          },
          'group-title': {
              font: defaultFont,
              fontSize: 12
          }
      },
      title: {
          font: defaultFont,
          fontSize: 14,
          fontWeight: 'bold',
          dy: -3,
          anchor: 'start'
      },
      axis: {
          gridColor: gridColor,
          tickColor: gridColor,
          domain: false,
          grid: true
      },
      range: {
          category: [
              '#4285F4',
              '#DB4437',
              '#F4B400',
              '#0F9D58',
              '#AB47BC',
              '#00ACC1',
              '#FF7043',
              '#9E9D24',
              '#5C6BC0',
              '#F06292',
              '#00796B',
              '#C2185B',
          ],
          heatmap: ['#c6dafc', '#5e97f6', '#2a56c6']
      }
  };

  var ptToPx = function (value) { return value * (1 / 3 + 1); };
  var fontSmallPx = ptToPx(9), legendFontPx = ptToPx(10), fontLargePx = ptToPx(12), fontStandard = 'Segoe UI', fontTitle = 'wf_standard-font, helvetica, arial, sans-serif', firstLevelElementColor = '#252423', secondLevelElementColor = '#605E5C', backgroundColor = 'transparent', backgroundSecondaryColor = '#C8C6C4', paletteColor1 = '#118DFF', paletteColor2 = '#12239E', paletteColor3 = '#E66C37', paletteColor4 = '#6B007B', paletteColor5 = '#E044A7', paletteColor6 = '#744EC2', paletteColor7 = '#D9B300', paletteColor8 = '#D64550', divergentColorMax = paletteColor1, divergentColorMin = '#DEEFFF', divergentPalette = [divergentColorMin, divergentColorMax], ordinalPalette = [
      divergentColorMin,
      '#c7e4ff',
      '#b0d9ff',
      '#9aceff',
      '#83c3ff',
      '#6cb9ff',
      '#55aeff',
      '#3fa3ff',
      '#2898ff',
      divergentColorMax,
  ];
  var powerbiTheme = {
      view: { stroke: backgroundColor },
      background: backgroundColor,
      font: fontStandard,
      header: {
          titleFont: fontTitle,
          titleFontSize: fontLargePx,
          titleColor: firstLevelElementColor,
          labelFont: fontStandard,
          labelFontSize: legendFontPx,
          labelColor: secondLevelElementColor
      },
      axis: {
          ticks: false,
          grid: false,
          domain: false,
          labelColor: secondLevelElementColor,
          labelFontSize: fontSmallPx,
          titleFont: fontTitle,
          titleColor: firstLevelElementColor,
          titleFontSize: fontLargePx,
          titleFontWeight: 'normal'
      },
      axisQuantitative: {
          tickCount: 3,
          grid: true,
          gridColor: backgroundSecondaryColor,
          gridDash: [1, 5],
          labelFlush: false
      },
      axisBand: { tickExtra: true },
      axisX: { labelPadding: 5 },
      axisY: { labelPadding: 10 },
      bar: { fill: paletteColor1 },
      line: {
          stroke: paletteColor1,
          strokeWidth: 3,
          strokeCap: 'round',
          strokeJoin: 'round'
      },
      text: { font: fontStandard, fontSize: fontSmallPx, fill: secondLevelElementColor },
      arc: { fill: paletteColor1 },
      area: { fill: paletteColor1, line: true, opacity: 0.6 },
      path: { stroke: paletteColor1 },
      rect: { fill: paletteColor1 },
      point: { fill: paletteColor1, filled: true, size: 75 },
      shape: { stroke: paletteColor1 },
      symbol: { fill: paletteColor1, strokeWidth: 1.5, size: 50 },
      legend: {
          titleFont: fontStandard,
          titleFontWeight: 'bold',
          titleColor: secondLevelElementColor,
          labelFont: fontStandard,
          labelFontSize: legendFontPx,
          labelColor: secondLevelElementColor,
          symbolType: 'circle',
          symbolSize: 75
      },
      range: {
          category: [
              paletteColor1,
              paletteColor2,
              paletteColor3,
              paletteColor4,
              paletteColor5,
              paletteColor6,
              paletteColor7,
              paletteColor8,
          ],
          diverging: divergentPalette,
          heatmap: divergentPalette,
          ordinal: ordinalPalette
      }
  };

  var version = pkg.version;

  exports.dark = darkTheme;
  exports.excel = excelTheme;
  exports.fivethirtyeight = fiveThirtyEightTheme;
  exports.ggplot2 = ggplot2Theme;
  exports.googlecharts = googlechartsTheme;
  exports.latimes = latimesTheme;
  exports.powerbi = powerbiTheme;
  exports.quartz = quartzTheme;
  exports.urbaninstitute = urbanInstituteTheme;
  exports.version = version;
  exports.vox = voxTheme;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
