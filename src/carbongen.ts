import {Config} from './config.js';

const defaultFont = 'IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".sfnstext-regular",sans-serif';
const condensedFont =
  'IBM Plex Sans Condensed, system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", sans-serif';
const fontWeight = 400;

const TOKENS = {
  textPrimary: {g90: '#f4f4f4', g100: '#f4f4f4', white: '#161616', g10: '#161616'},
  textSecondary: {g90: '#c6c6c6', g100: '#c6c6c6', white: '#525252', g10: '#525252'},
  // layer
  layerAccent01: {
    white: '#e0e0e0',
    g10: '#e0e0e0',
    g90: '#525252',
    g100: '#393939',
  },
  // grid
  gridBg: {
    white: '#ffffff',
    g10: '#ffffff',
    g90: '#161616',
    g100: '#161616',
  },
};

const darkCategories = [
  '#8a3ffc',
  '#33b1ff',
  '#007d79',
  '#ff7eb6',
  '#fa4d56',
  '#fff1f1',
  '#6fdc8c',
  '#4589ff',
  '#d12771',
  '#d2a106',
  '#08bdba',
  '#bae6ff',
  '#ba4e00',
  '#d4bbff',
];

const lightCategories = [
  '#6929c4',
  '#1192e8',
  '#005d5d',
  '#9f1853',
  '#fa4d56',
  '#570408',
  '#198038',
  '#002d9c',
  '#ee538b',
  '#b28600',
  '#009d9a',
  '#012749',
  '#8a3800',
  '#a56eff',
];

function genCarbonConfig({theme, background}: {theme: 'white' | 'g10' | 'g90' | 'g100'; background: string}): Config {
  const type = ['white', 'g10'].includes(theme) ? 'light' : 'dark';

  const viewbg = TOKENS.gridBg[theme];

  const titleColor = TOKENS.textPrimary[theme];
  const textColor = TOKENS.textSecondary[theme];

  const category = type === 'dark' ? darkCategories : lightCategories;
  const markColor = type === 'dark' ? '#d4bbff' : '#6929c4';

  return {
    background,

    arc: {fill: markColor},
    area: {fill: markColor},
    path: {stroke: markColor},
    rect: {fill: markColor},
    shape: {stroke: markColor},
    symbol: {stroke: markColor},
    circle: {fill: markColor},

    view: {
      fill: viewbg,
      stroke: viewbg,
    },

    group: {
      fill: viewbg,
    },

    title: {
      color: titleColor,
      anchor: 'start',
      dy: -15,
      fontSize: 16,
      font: defaultFont,
      fontWeight: 600,
    },

    axis: {
      // Axis labels
      labelColor: textColor,
      labelFontSize: 12,
      labelFont: condensedFont,
      labelFontWeight: fontWeight,
      // Axis titles
      titleColor: titleColor,
      titleFontWeight: 600,
      titleFontSize: 12,

      // MISC
      grid: true,
      gridColor: TOKENS.layerAccent01[theme],
      labelAngle: 0,
    },
    axisX: {
      titlePadding: 10,
    },
    axisY: {
      titlePadding: 2.5,
    },
    style: {
      'guide-label': {
        font: defaultFont,
        fill: textColor,
        fontWeight: fontWeight,
      },
      'guide-title': {
        font: defaultFont,
        fill: textColor,
        fontWeight: fontWeight,
      },
    },

    range: {
      category,
      diverging: [
        '#750e13',
        '#a2191f',
        '#da1e28',
        '#fa4d56',
        '#ff8389',
        '#ffb3b8',
        '#ffd7d9',
        '#fff1f1',
        '#e5f6ff',
        '#bae6ff',
        '#82cfff',
        '#33b1ff',
        '#1192e8',
        '#0072c3',
        '#00539a',
        '#003a6d',
      ],
      heatmap: [
        '#f6f2ff',
        '#e8daff',
        '#d4bbff',
        '#be95ff',
        '#a56eff',
        '#8a3ffc',
        '#6929c4',
        '#491d8b',
        '#31135e',
        '#1c0f30',
      ],
    },
  };
}

export default genCarbonConfig;
