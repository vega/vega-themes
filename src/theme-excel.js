var markColor = '#4572a7';

export default {
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
    gridDefault: true,
    gridOpacity: 1,
    gridWidth: 0.5,
    gridColor: '#000000',
    tickPadding: 10,
    tickSize: 5,
    tickWidth: 0.5
  },

  axisBand: {
    tickExtra: true,
    gridDefault: false
  },

  legend: {
    labelBaseline: 'middle',
    labelFontSize: 11,
    symbolType: 'square',
    symbolSize: 50
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
