(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.vegaThemes = {}));
}(this, function (exports) { 'use strict';

    var name = "vega-themes";
    var version = "2.5.0";
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
    		url: "http://idl.cs.washington.edu"
    	},
    	{
    		name: "Dominik Moritz",
    		url: "https://www.domoritz.de"
    	}
    ];
    var main = "build/vega-themes.js";
    var module = "build/src/index.js";
    var unpkg = "build/vega-themes.min.js";
    var jsdelivr = "build/vega-themes.min.js";
    var typings = "build/src/index.d.ts";
    var repository = {
    	type: "git",
    	url: "https://github.com/vega/vega-themes.git"
    };
    var scripts = {
    	prepare: "beemo create-config --silent",
    	clean: "rm -rf build examples/build",
    	prettierbase: "beemo prettier 'examples/*.{html,scss,css}'",
    	eslintbase: "beemo eslint 'src/**/*.ts'",
    	format: "yarn eslintbase --fix && yarn prettierbase --write",
    	lint: "yarn eslintbase && yarn prettierbase --check",
    	prebuild: "mkdir -p build",
    	build: "tsc && rollup -c",
    	postbuild: "terser build/vega-themes.js -cm > build/vega-themes.min.js",
    	"deploy:gh": "yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",
    	prepublishOnly: "yarn clean && yarn build",
    	preversion: "yarn lint",
    	serve: "browser-sync start -s -f build examples --serveStatic examples",
    	start: "yarn build && concurrently --kill-others -n Server,Typescript,Rollup 'yarn serve' 'tsc -w' 'rollup -c -w'"
    };
    var devDependencies = {
    	"browser-sync": "^2.26.7",
    	concurrently: "^4.1.2",
    	"gh-pages": "^2.1.1",
    	rollup: "^1.22.0",
    	"rollup-plugin-json": "^4.0.0",
    	terser: "^4.3.4",
    	typescript: "~3.6.3",
    	vega: "^5.5.2",
    	"vega-lite": "^4.0.0-beta.1",
    	"vega-lite-dev-config": "^0.3.0"
    };
    var peerDependencies = {
    	vega: "*",
    	"vega-lite": "*"
    };
    var beemo = {
    	module: "vega-lite-dev-config",
    	drivers: [
    		"prettier",
    		"eslint"
    	]
    };
    var pkg = {
    	name: name,
    	version: version,
    	description: description,
    	keywords: keywords,
    	license: license,
    	author: author,
    	contributors: contributors,
    	main: main,
    	module: module,
    	unpkg: unpkg,
    	jsdelivr: jsdelivr,
    	typings: typings,
    	repository: repository,
    	scripts: scripts,
    	devDependencies: devDependencies,
    	peerDependencies: peerDependencies,
    	beemo: beemo
    };

    const lightColor = '#fff';
    const medColor = '#888';
    const darkTheme = {
        background: '#333',
        title: { color: lightColor },
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

    const markColor = '#4572a7';
    const excelTheme = {
        background: '#fff',
        arc: { fill: markColor },
        area: { fill: markColor },
        line: { stroke: markColor, strokeWidth: 2 },
        path: { stroke: markColor },
        rect: { fill: markColor },
        shape: { stroke: markColor },
        symbol: { fill: markColor, strokeWidth: 1.5, size: 50 },
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
                '#a99cbc'
            ]
        }
    };

    const markColor$1 = '#30a2da';
    const axisColor = '#cbcbcb';
    const guideLabelColor = '#999';
    const guideTitleColor = '#333';
    const backgroundColor = '#f0f0f0';
    const blackTitle = '#333';
    const fiveThirtyEightTheme = {
        arc: { fill: markColor$1 },
        area: { fill: markColor$1 },
        axis: {
            domainColor: axisColor,
            grid: true,
            gridColor: axisColor,
            gridWidth: 1,
            labelColor: guideLabelColor,
            labelFontSize: 10,
            titleColor: guideTitleColor,
            tickColor: axisColor,
            tickSize: 10,
            titleFontSize: 14,
            titlePadding: 10,
            labelPadding: 4
        },
        axisBand: {
            grid: false
        },
        background: backgroundColor,
        group: {
            fill: backgroundColor
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
            stroke: markColor$1,
            strokeWidth: 2
        },
        path: { stroke: markColor$1, strokeWidth: 0.5 },
        rect: { fill: markColor$1 },
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
                '#9fe4f8'
            ],
            diverging: ['#cc0020', '#e77866', '#f6e7e1', '#d6e8ed', '#91bfd9', '#1d78b5'],
            heatmap: ['#d6e8ed', '#cee0e5', '#91bfd9', '#549cc6', '#1d78b5']
        },
        point: {
            filled: true,
            shape: 'circle'
        },
        shape: { stroke: markColor$1 },
        style: {
            bar: {
                binSpacing: 2,
                fill: markColor$1,
                stroke: null
            }
        },
        title: {
            anchor: 'start',
            fontSize: 24,
            fontWeight: 600,
            offset: 20
        }
    };

    const markColor$2 = '#000';
    const ggplot2Theme = {
        group: {
            fill: '#e5e5e5'
        },
        arc: { fill: markColor$2 },
        area: { fill: markColor$2 },
        line: { stroke: markColor$2 },
        path: { stroke: markColor$2 },
        rect: { fill: markColor$2 },
        shape: { stroke: markColor$2 },
        symbol: { fill: markColor$2, size: 40 },
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
                '#DCDCDC'
            ]
        }
    };

    const headlineFontSize = 22;
    const headlineFontWeight = 'normal';
    const labelFont = 'Benton Gothic, sans-serif';
    const labelFontSize = 11.5;
    const labelFontWeight = 'normal';
    const markColor$3 = '#82c6df';
    // const markHighlight = '#006d8f';
    // const markDemocrat = '#5789b8';
    // const markRepublican = '#d94f54';
    const titleFont = 'Benton Gothic Bold, sans-serif';
    const titleFontWeight = 'normal';
    const titleFontSize = 13;
    const colorSchemes = {
        'category-6': ['#ec8431', '#829eb1', '#c89d29', '#3580b1', '#adc839', '#ab7fb4'],
        'fire-7': ['#fbf2c7', '#f9e39c', '#f8d36e', '#f4bb6a', '#e68a4f', '#d15a40', '#ab4232'],
        'fireandice-6': ['#e68a4f', '#f4bb6a', '#f9e39c', '#dadfe2', '#a6b7c6', '#849eae'],
        'ice-7': ['#edefee', '#dadfe2', '#c4ccd2', '#a6b7c6', '#849eae', '#607785', '#47525d']
    };
    const latimesTheme = {
        background: '#ffffff',
        title: {
            anchor: 'start',
            color: '#000000',
            font: titleFont,
            fontSize: headlineFontSize,
            fontWeight: headlineFontWeight
        },
        arc: { fill: markColor$3 },
        area: { fill: markColor$3 },
        line: { stroke: markColor$3, strokeWidth: 2 },
        path: { stroke: markColor$3 },
        rect: { fill: markColor$3 },
        shape: { stroke: markColor$3 },
        symbol: { fill: markColor$3, size: 30 },
        axis: {
            labelFont,
            labelFontSize,
            labelFontWeight,
            titleFont,
            titleFontSize,
            titleFontWeight
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
            labelFont,
            labelFontSize,
            symbolType: 'square',
            titleFont,
            titleFontSize,
            titleFontWeight
        },
        range: {
            category: colorSchemes['category-6'],
            diverging: colorSchemes['fireandice-6'],
            heatmap: colorSchemes['fire-7'],
            ordinal: colorSchemes['fire-7'],
            ramp: colorSchemes['fire-7']
        }
    };

    const markColor$4 = '#ab5787';
    const axisColor$1 = '#979797';
    const quartzTheme = {
        background: '#f9f9f9',
        arc: { fill: markColor$4 },
        area: { fill: markColor$4 },
        line: { stroke: markColor$4 },
        path: { stroke: markColor$4 },
        rect: { fill: markColor$4 },
        shape: { stroke: markColor$4 },
        symbol: { fill: markColor$4, size: 30 },
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
                '#c4c4c4'
            ]
        }
    };

    const markColor$5 = '#3e5c69';
    const voxTheme = {
        background: '#fff',
        arc: { fill: markColor$5 },
        area: { fill: markColor$5 },
        line: { stroke: markColor$5 },
        path: { stroke: markColor$5 },
        rect: { fill: markColor$5 },
        shape: { stroke: markColor$5 },
        symbol: { fill: markColor$5 },
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

    const markColor$6 = '#1696d2';
    const axisColor$2 = '#000000';
    const backgroundColor$1 = '#FFFFFF';
    const font = 'Lato';
    const labelFont$1 = 'Lato';
    const sourceFont = 'Lato';
    const gridColor = '#DEDDDD';
    const titleFontSize$1 = 18;
    const colorSchemes$1 = {
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
    const urbanInstituteTheme = {
        background: backgroundColor$1,
        title: {
            anchor: 'start',
            fontSize: titleFontSize$1,
            font: font
        },
        axisX: {
            domain: true,
            domainColor: axisColor$2,
            domainWidth: 1,
            grid: false,
            labelFontSize: 12,
            labelFont: labelFont$1,
            labelAngle: 0,
            tickColor: axisColor$2,
            tickSize: 5,
            titleFontSize: 12,
            titlePadding: 10,
            titleFont: font
        },
        axisY: {
            domain: false,
            domainWidth: 1,
            grid: true,
            gridColor: gridColor,
            gridWidth: 1,
            labelFontSize: 12,
            labelFont: labelFont$1,
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
            labelFont: labelFont$1,
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
            category: colorSchemes$1['six-groups-cat-1'],
            diverging: colorSchemes$1['diverging-colors'],
            heatmap: colorSchemes$1['diverging-colors'],
            ordinal: colorSchemes$1['six-groups-seq'],
            ramp: colorSchemes$1['shades-blue']
        },
        area: {
            fill: markColor$6
        },
        rect: {
            fill: markColor$6
        },
        line: {
            color: markColor$6,
            stroke: markColor$6,
            strokeWidth: 5
        },
        trail: {
            color: markColor$6,
            stroke: markColor$6,
            strokeWidth: 0,
            size: 1
        },
        path: {
            stroke: markColor$6,
            strokeWidth: 0.5
        },
        point: {
            filled: true
        },
        text: {
            font: sourceFont,
            color: markColor$6,
            fontSize: 11,
            align: 'center',
            fontWeight: 400,
            size: 11
        },
        style: {
            bar: {
                fill: markColor$6,
                stroke: false
            }
        },
        arc: { fill: markColor$6 },
        shape: { stroke: markColor$6 },
        symbol: { fill: markColor$6, size: 30 }
    };

    const version$1 = pkg.version;

    exports.dark = darkTheme;
    exports.excel = excelTheme;
    exports.fivethirtyeight = fiveThirtyEightTheme;
    exports.ggplot2 = ggplot2Theme;
    exports.latimes = latimesTheme;
    exports.quartz = quartzTheme;
    exports.urbaninstitute = urbanInstituteTheme;
    exports.version = version$1;
    exports.vox = voxTheme;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vega-themes.js.map
