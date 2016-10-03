var markColor = '#000';

export default {
  group: {
    fill: '#e5e5e5'
  },

  mark: {
    arc: { fill: markColor },
    area: { fill: markColor },
    line: { stroke: markColor },
    path: { stroke: markColor },
    rect: { fill: markColor },
    shape: { stroke: markColor },
    symbol: { fill: markColor, size: 40 }
  },

  axis: {
    domainDefault: false,
    gridDefault: true,
    gridColor: '#FFFFFF',
    gridOpacity: 1,
    tickColor: '#7F7F7F',
    tickPadding: 4,
    tickSize: 5.67,
    tickLabelColor: '#7F7F7F',
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
