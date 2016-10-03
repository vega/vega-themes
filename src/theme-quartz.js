var markColor = '#ab5787',
    axisColor = '#979797';

export default {
  background: '#f9f9f9',

  mark: {
    arc: { fill: markColor },
    area: { fill: markColor },
    line: { stroke: markColor },
    path: { stroke: markColor },
    rect: { fill: markColor },
    shape: { stroke: markColor },
    symbol: { fill: markColor, size: 30 }
  },

  axis: {
    domainColor: axisColor,
    domainWidth: 0.5,
    gridWidth: 0.2,
    tickColor: axisColor,
    tickWidth: 0.2,
    tickLabelColor: axisColor,
    titleColor: axisColor
  },

  axisBand: {
    gridDefault: false
  },

  axisX: {
    gridDefault: true,
    tickSize: 10
  },

  axisY: {
    domainDefault: false,
    gridDefault: true,
    tickSize: 0
  },

  legend: {
    padding: 1,
    labelFontSize: 11,
    symbolType: 'square',
    symbolSize: 30
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
