(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.vegaThemes = {}));
}(this, function (exports) { 'use strict';

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
            tickWidth: 0.5,
        },
        axisBand: {
            grid: false,
            tickExtra: true,
        },
        legend: {
            labelBaseline: 'middle',
            labelFontSize: 11,
            symbolSize: 50,
            symbolType: 'square',
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
            ],
        },
    };

    const markColor$1 = '#000';
    const ggplot2Theme = {
        group: {
            fill: '#e5e5e5',
        },
        arc: { fill: markColor$1 },
        area: { fill: markColor$1 },
        line: { stroke: markColor$1 },
        path: { stroke: markColor$1 },
        rect: { fill: markColor$1 },
        shape: { stroke: markColor$1 },
        symbol: { fill: markColor$1, size: 40 },
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
            titleFontWeight: 'normal',
        },
        legend: {
            labelBaseline: 'middle',
            labelFontSize: 11,
            symbolSize: 40,
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
            ],
        },
    };

    const markColor$2 = '#ab5787';
    const axisColor = '#979797';
    const quartzTheme = {
        background: '#f9f9f9',
        arc: { fill: markColor$2 },
        area: { fill: markColor$2 },
        line: { stroke: markColor$2 },
        path: { stroke: markColor$2 },
        rect: { fill: markColor$2 },
        shape: { stroke: markColor$2 },
        symbol: { fill: markColor$2, size: 30 },
        axis: {
            domainColor: axisColor,
            domainWidth: 0.5,
            gridWidth: 0.2,
            labelColor: axisColor,
            tickColor: axisColor,
            tickWidth: 0.2,
            titleColor: axisColor,
        },
        axisBand: {
            grid: false,
        },
        axisX: {
            grid: true,
            tickSize: 10,
        },
        axisY: {
            domain: false,
            grid: true,
            tickSize: 0,
        },
        legend: {
            labelFontSize: 11,
            padding: 1,
            symbolSize: 30,
            symbolType: 'square',
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
            ],
        },
    };

    const markColor$3 = '#3e5c69';
    const voxTheme = {
        background: '#fff',
        arc: { fill: markColor$3 },
        area: { fill: markColor$3 },
        line: { stroke: markColor$3 },
        path: { stroke: markColor$3 },
        rect: { fill: markColor$3 },
        shape: { stroke: markColor$3 },
        symbol: { fill: markColor$3 },
        axis: {
            domainWidth: 0.5,
            grid: true,
            labelPadding: 2,
            tickSize: 5,
            tickWidth: 0.5,
            titleFontWeight: 'normal',
        },
        axisBand: {
            grid: false,
        },
        axisX: {
            gridWidth: 0.2,
        },
        axisY: {
            gridDash: [3],
            gridWidth: 0.4,
        },
        legend: {
            labelFontSize: 11,
            padding: 1,
            symbolType: 'square',
        },
        range: {
            category: [
                '#3e5c69',
                '#6793a6',
                '#182429',
                '#0570b0',
                '#3690c0',
                '#74a9cf',
                '#a6bddb',
                '#e2ddf2',
            ],
        },
    };

    const lightColor = '#fff';
    const medColor = '#888';
    const darkTheme = {
        background: '#333',
        title: { color: lightColor },
        style: {
            'guide-label': {
                fill: lightColor,
            },
            'guide-title': {
                fill: lightColor,
            },
        },
        axis: {
            domainColor: lightColor,
            gridColor: medColor,
            tickColor: lightColor,
        },
    };

    const markColor$4 = '#30a2da';
    const axisColor$1 = '#cbcbcb';
    const guideLabelColor = '#999';
    const backgroundColor = '#f0f0f0';
    const blackTitle = '#333';
    const fiveThirtyEightTheme = {
        arc: { fill: markColor$4 },
        area: { fill: markColor$4 },
        axisBand: {
            grid: false,
        },
        axisBottom: {
            domain: false,
            domainColor: blackTitle,
            domainWidth: 3,
            grid: true,
            gridColor: axisColor$1,
            gridWidth: 1,
            labelColor: guideLabelColor,
            labelFontSize: 10,
            labelPadding: 4,
            tickColor: axisColor$1,
            tickSize: 10,
            titleFontSize: 14,
            titlePadding: 10,
        },
        axisLeft: {
            domainColor: axisColor$1,
            domainWidth: 1,
            grid: true,
            gridColor: axisColor$1,
            gridWidth: 1,
            labelColor: guideLabelColor,
            labelFontSize: 10,
            labelPadding: 4,
            tickColor: axisColor$1,
            tickSize: 10,
            ticks: true,
            titleFontSize: 14,
            titlePadding: 10,
        },
        axisRight: {
            domainColor: blackTitle,
            domainWidth: 1,
            grid: true,
            gridColor: axisColor$1,
            gridWidth: 1,
            labelColor: guideLabelColor,
            labelFontSize: 10,
            labelPadding: 4,
            tickColor: axisColor$1,
            tickSize: 10,
            ticks: true,
            titleFontSize: 14,
            titlePadding: 10,
        },
        axisTop: {
            domain: false,
            domainColor: blackTitle,
            domainWidth: 3,
            grid: true,
            gridColor: axisColor$1,
            gridWidth: 1,
            labelColor: guideLabelColor,
            labelFontSize: 10,
            labelPadding: 4,
            tickColor: axisColor$1,
            tickSize: 10,
            titleFontSize: 14,
            titlePadding: 10,
        },
        background: backgroundColor,
        group: {
            fill: backgroundColor,
        },
        legend: {
            labelColor: blackTitle,
            labelFontSize: 11,
            padding: 1,
            symbolSize: 30,
            symbolType: 'square',
            titleColor: blackTitle,
            titleFontSize: 14,
            titlePadding: 10,
        },
        line: {
            stroke: markColor$4,
            strokeWidth: 2,
        },
        path: { stroke: markColor$4, strokeWidth: 0.5 },
        rect: { fill: markColor$4 },
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
            diverging: [
                '#cc0020',
                '#e77866',
                '#f6e7e1',
                '#d6e8ed',
                '#91bfd9',
                '#1d78b5',
            ],
            heatmap: ['#d6e8ed', '#cee0e5', '#91bfd9', '#549cc6', '#1d78b5'],
        },
        symbol: {
            filled: true,
            shape: 'circle',
        },
        shape: { stroke: markColor$4 },
        style: {
            bar: {
                binSpacing: 2,
                fill: markColor$4,
                stroke: null,
            },
        },
        title: {
            anchor: 'start',
            fontSize: 24,
            fontWeight: 600,
            offset: 20,
        },
    };

    const headlineFontSize = 22;
    const headlineFontWeight = 'normal';
    const labelFont = 'Benton Gothic, sans';
    const labelFontSize = 11.5;
    const labelFontWeight = 'normal';
    const markColor$5 = '#82c6df';
    const titleFont = 'Benton Gothic Bold, sans';
    const titleFontWeight = 'normal';
    const titleFontSize = 13;
    const colorSchemes = {
        'category-6': [
            '#ec8431',
            '#829eb1',
            '#c89d29',
            '#3580b1',
            '#adc839',
            '#ab7fb4',
        ],
        'fire-7': [
            '#fbf2c7',
            '#f9e39c',
            '#f8d36e',
            '#f4bb6a',
            '#e68a4f',
            '#d15a40',
            '#ab4232',
        ],
        'fireandice-6': [
            '#e68a4f',
            '#f4bb6a',
            '#f9e39c',
            '#dadfe2',
            '#a6b7c6',
            '#849eae',
        ],
        'ice-7': [
            '#edefee',
            '#dadfe2',
            '#c4ccd2',
            '#a6b7c6',
            '#849eae',
            '#607785',
            '#47525d',
        ],
    };
    const latimesTheme = {
        background: '#ffffff',
        title: {
            anchor: 'start',
            font: titleFont,
            fontColor: '#000000',
            fontSize: headlineFontSize,
            fontWeight: headlineFontWeight,
        },
        arc: { fill: markColor$5 },
        area: { fill: markColor$5 },
        line: { stroke: markColor$5, strokeWidth: 2 },
        path: { stroke: markColor$5 },
        rect: { fill: markColor$5 },
        shape: { stroke: markColor$5 },
        symbol: { fill: markColor$5, size: 30 },
        axis: {
            labelFont,
            labelFontSize,
            labelFontWeight,
            titleFont,
            titleFontSize,
            titleFontWeight,
        },
        axisX: {
            labelAngle: 0,
            labelPadding: 4,
            tickSize: 3,
        },
        axisY: {
            labelBaseline: 'middle',
            maxExtent: 45,
            minExtent: 45,
            tickSize: 2,
            titleAlign: 'left',
            titleAngle: 0,
            titleX: -45,
            titleY: -11,
        },
        legend: {
            labelFont,
            labelFontSize,
            symbolType: 'square',
            titleFont,
            titleFontSize,
            titleFontWeight,
        },
        range: {
            category: colorSchemes['category-6'],
            diverging: colorSchemes['fireandice-6'],
            heatmap: colorSchemes['fire-7'],
            ordinal: colorSchemes['fire-7'],
            ramp: colorSchemes['fire-7'],
        },
    };

    exports.dark = darkTheme;
    exports.excel = excelTheme;
    exports.fivethirtyeight = fiveThirtyEightTheme;
    exports.ggplot2 = ggplot2Theme;
    exports.latimes = latimesTheme;
    exports.quartz = quartzTheme;
    exports.vox = voxTheme;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vega-themes.js.map
