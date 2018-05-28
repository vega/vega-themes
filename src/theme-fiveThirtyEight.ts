import { Config } from 'vega';

const markColor = '#30a2da';
const axisColor = '#f0f0f0';

const fiveThirtyEightTheme: Config = {
  arc: { fill: markColor },
  area: { fill: markColor },

  axisBand: {
    grid: false,
  },

  axisBottom: {
    domain: false,
    domainColor: 'black',
    domainWidth: 3,
    grid: true,
    gridColor: '#cbcbcb',
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: '#cbcbcb',
    tickSize: 10,
    titleFontSize: 14,
    titlePadding: 10,
  },

  axisLeft: {
    domainColor: '#cbcbcb',
    domainWidth: 1,
    gridColor: '#cbcbcb',
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: '#cbcbcb',
    tickSize: 10,
    ticks: true,
    titleFontSize: 14,
    titlePadding: 10,
  },

  axisRight: {
    domainColor: '#cbcbcb',
    domainWidth: 1,
    gridColor: '#cbcbcb',
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: '#cbcbcb',
    tickSize: 10,
    ticks: true,
    titleFontSize: 14,
    titlePadding: 10,
  },

  axisTop: {
    domain: false,
    domainColor: 'black',
    domainWidth: 3,
    grid: true,
    gridColor: '#cbcbcb',
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: '#cbcbcb',
    tickSize: 10,
    titleFontSize: 14,
    titlePadding: 10,
  },

  background: '#f0f0f0',

  legend: {
    labelFontSize: 11,
    padding: 1,
    symbolSize: 30,
    symbolType: 'square',
    titleFontSize: 14,
    titlePadding: 10,
  },

  line: {
    stroke: markColor,
    strokeWidth: 2,
  },

  path: { stroke: markColor, strokeWidth: 0.5 },
  rect: { fill: markColor },

  range: {
    category: ['#30a2da', '#fc4f30', '#e5ae38', '#6d904f', '#8b8b8b'],
  },

  symbol: {
    opacity: 0.5,
    shape: 'circle',
    size: 40,
  },

  shape: { stroke: markColor },

  style: {
    bar: {
      binSpacing: 2,
      fill: markColor,
      stroke: null,
    },
  },
};

export default fiveThirtyEightTheme;
