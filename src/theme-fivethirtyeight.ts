import { Config } from 'vega';

const markColor = '#30a2da';
const axisColor = '#cbcbcb';
const backgroundColor = '#f0f0f0';

const fivethirtyeighttheme: Config = {
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
    gridColor: axisColor,
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: axisColor,
    tickSize: 10,
    titleFontSize: 14,
    titlePadding: 10,
  },

  axisLeft: {
    domainColor: axisColor,
    domainWidth: 1,
    gridColor: axisColor,
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: axisColor,
    tickSize: 10,
    ticks: true,
    titleFontSize: 14,
    titlePadding: 10,
  },

  axisRight: {
    domainColor: axisColor,
    domainWidth: 1,
    gridColor: axisColor,
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: axisColor,
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
    gridColor: axisColor,
    gridWidth: 1,
    labelFontSize: 12,
    labelPadding: 4,
    tickColor: axisColor,
    tickSize: 10,
    titleFontSize: 14,
    titlePadding: 10,
  },

  background: backgroundColor,
  group: {
    fill: backgroundColor,
  },

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
    opacity: 1,
    shape: 'circle',
    size: 40,
    strokeWidth: 1,
  },

  shape: { stroke: markColor },

  style: {
    bar: {
      binSpacing: 2,
      fill: markColor,
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

export default fivethirtyeighttheme;
