import { Config } from './config';

const markColor = '#82c6df';
const titleFont = "Benton Gothic Bold"
const labelFont = "Benton Gothic"

const latimesTheme: Config = {
  background: '#ffffff',

  title: {
      fontSize: 24,
      font: titleFont,
      anchor: "start",
      fontColor: "#000000",
      fontWeight: "normal",
  },

  arc: { fill: markColor },
  area: { fill: markColor },
  line: { stroke: markColor },
  path: { stroke: markColor },
  rect: { fill: markColor },
  shape: { stroke: markColor },
  symbol: { fill: markColor, size: 30 },

  axis: {
      titleFont: titleFont,
      titleFontSize: 13,
      titleFontWeight: "normal",
      labelFont: labelFont,
      labelFontSize: 11.5,
      labelFontWeight: "normal",
  },

  axisX: {
      labelAngle: 0,
      labelPadding: 4,
      tickSize: 3,
  },

  axisY: {
      titleAngle: 0,
      titleY: -11,
      titleX: -45,
      titleAlign: "left",
      labelBaseline: "middle",
      tickSize: 2,
      minExtent: 45,
      maxExtent: 45,
  }

};

export default latimesTheme;
