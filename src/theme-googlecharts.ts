import {Config} from './config';

const markColor = '#3366CC';
const gridColor = '#ccc';
const defaultFont = 'Arial, sans-serif';

const googlechartsTheme: Config = {
  arc: {fill: markColor},
  area: {fill: markColor},
  path: {stroke: markColor},
  rect: {fill: markColor},
  shape: {stroke: markColor},
  symbol: {stroke: markColor},
  circle: {fill: markColor},
  background: '#fff',
  padding: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  },
  title: {
    font: defaultFont,
    fontSize: 12,
    dy: -3,
    anchor: 'start'
  },
  axis: {
    labelFont: defaultFont,
    labelFontSize: 12,
    titleFont: defaultFont,
    titleFontWeight: 200,
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
      '#C2185B'
    ],
    heatmap: ['#c6dafc', '#5e97f6', '#2a56c6']
  }
};

export default googlechartsTheme;
