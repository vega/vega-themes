import { Config } from './config';

const labelFont = "Benton Gothic, sans";
const labelFontSize = 11.5;
const markColor = '#82c6df';
const titleFont = "Benton Gothic Bold, sans";
const titleFontWeight = "normal";

const latimesTheme: Config = {
  background: '#ffffff',

  title: {
      anchor: "start",
      font: titleFont,
      fontSize: 24,
      fontColor: "#000000",
      fontWeight: "normal"
  },

  arc: { fill: markColor },
  area: { fill: markColor },
  line: { stroke: markColor },
  path: { stroke: markColor },
  rect: { fill: markColor },
  shape: { stroke: markColor },
  symbol: { fill: markColor, size: 30 },

  axis: {
      labelFont: labelFont,
      labelFontSize: labelFontSize,
      labelFontWeight: "normal",
      titleFont: titleFont,
      titleFontSize: 13,
      titleFontWeight: titleFontWeight
  },

  axisX: {
      labelAngle: 0,
      labelPadding: 4,
      tickSize: 3
  },

  axisY: {
      labelBaseline: "middle",
      minExtent: 45,
      maxExtent: 45,
      tickSize: 2,
      titleAlign: "left",
      titleAngle: 0,
      titleY: -11,
      titleX: -45
  },

  legend: {
    labelFont: labelFont,
    labelFontSize: labelFontSize,
    symbolType: 'square',
    titleFont: titleFont,
    titleFontSize: 13,
    titleFontWeight: titleFontWeight
  }

};

export default latimesTheme;
