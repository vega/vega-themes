import { Config } from 'vega';

const markColor = "#30a2da";
const axisColor = "#f0f0f0";

const fiveThirtyEightTheme: Config = {
  background: '#f0f0f0',
  symbol: { opacity: 0.5,
            shape: 'circle',
            filled: true,
            size: 40},
  arc: { fill: markColor },
  area: { fill: markColor },
  line: { stroke: markColor,
          strokeWidth: 2,
          strokeCap: 'butt'},
  path: { stroke: markColor, strokeWidth: 0.5 },
  rect: { fill: markColor },
  shape: { stroke: markColor },

  style: {
    bar: {
      fill: markColor,
      binSpacing: 2,
      stroke: null
    }
  },

  axisBand: {
    grid: false,
  },

  axisLeft: {
      
      gridColor: "#cbcbcb",
      gridWidth: 1,
      domainWidth:1,
      domainColor:"#cbcbcb",
      ticks: true,
      tickColor: "#cbcbcb",
      tickSize: 10,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14, 
      titlePadding: 10

    },
    
    axisBottom: {
      domain: false,
      grid: true,
      gridColor: "#cbcbcb",
      gridWidth: 1,
      tickColor: "#cbcbcb",
      domainColor:"black",
      domainWidth: 3,
      tickSize: 10,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14, 
      titlePadding: 10 
         },

    axisRight: {
      
      gridColor: "#cbcbcb",
      gridWidth: 1,
      domainWidth:1,
      domainColor:"#cbcbcb",
      ticks: true,
      tickColor: "#cbcbcb",
      tickSize: 10,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14, 
      titlePadding: 10
    },
    
    axisTop: {
      domain: false,
      grid: true,
      gridColor: "#cbcbcb",
      gridWidth: 1,
      tickColor: "#cbcbcb",
      domainColor:"black",
      domainWidth: 3,
      tickSize: 10,
      labelPadding:4,
      labelFontSize: 12,
      titleFontSize: 14, 
      titlePadding: 10

    },

  legend: {
    labelFontSize: 11,
    padding: 1,
    symbolSize: 30,
    symbolType: 'square',
    titleFontSize: 14, 
    titlePadding: 10
  },

  range: {
    category: [
      "#30a2da",
      "#fc4f30",
      "#e5ae38",
      "#6d904f",
      "#8b8b8b"
    ],
  },
};

export default fiveThirtyEightTheme;
