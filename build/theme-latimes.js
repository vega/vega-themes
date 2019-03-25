const headlineFontSize = 22;
const headlineFontWeight = 'normal';
const labelFont = 'Benton Gothic, sans';
const labelFontSize = 11.5;
const labelFontWeight = 'normal';
const markColor = '#82c6df';
const markHighlight = '#006d8f';
const markDemocrat = '#5789b8';
const markRepublican = '#d94f54';
const titleFont = 'Benton Gothic Bold, sans';
const titleFontWeight = 'normal';
const titleFontSize = 13;
const colorSchemes = {
    'category-6': [
        '#ec8431',
        '#829eb1',
        '#c89d29',
        '#3580b1',
        '#adc839',
        '#ab7fb4',
    ],
    'fire-7': [
        '#fbf2c7',
        '#f9e39c',
        '#f8d36e',
        '#f4bb6a',
        '#e68a4f',
        '#d15a40',
        '#ab4232',
    ],
    'fireandice-6': [
        '#e68a4f',
        '#f4bb6a',
        '#f9e39c',
        '#dadfe2',
        '#a6b7c6',
        '#849eae',
    ],
    'ice-7': [
        '#edefee',
        '#dadfe2',
        '#c4ccd2',
        '#a6b7c6',
        '#849eae',
        '#607785',
        '#47525d',
    ],
};
const latimesTheme = {
    background: '#ffffff',
    title: {
        anchor: 'start',
        font: titleFont,
        fontColor: '#000000',
        fontSize: headlineFontSize,
        fontWeight: headlineFontWeight,
    },
    arc: { fill: markColor },
    area: { fill: markColor },
    line: { stroke: markColor, strokeWidth: 2 },
    path: { stroke: markColor },
    rect: { fill: markColor },
    shape: { stroke: markColor },
    symbol: { fill: markColor, size: 30 },
    axis: {
        labelFont,
        labelFontSize,
        labelFontWeight,
        titleFont,
        titleFontSize,
        titleFontWeight,
    },
    axisX: {
        labelAngle: 0,
        labelPadding: 4,
        tickSize: 3,
    },
    axisY: {
        labelBaseline: 'middle',
        maxExtent: 45,
        minExtent: 45,
        tickSize: 2,
        titleAlign: 'left',
        titleAngle: 0,
        titleX: -45,
        titleY: -11,
    },
    legend: {
        labelFont,
        labelFontSize,
        symbolType: 'square',
        titleFont,
        titleFontSize,
        titleFontWeight,
    },
    range: {
        category: colorSchemes['category-6'],
        diverging: colorSchemes['fireandice-6'],
        heatmap: colorSchemes['fire-7'],
        ordinal: colorSchemes['fire-7'],
        ramp: colorSchemes['fire-7'],
    },
};
export default latimesTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbGF0aW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVtZS1sYXRpbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBQ3hDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFDakMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzVCLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDL0IsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLE1BQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDO0FBQzdDLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekIsTUFBTSxZQUFZLEdBQUc7SUFDbkIsWUFBWSxFQUFFO1FBQ1osU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO0tBQ1Y7SUFDRCxRQUFRLEVBQUU7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO0tBQ1Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7S0FDVjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7S0FDVjtDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksR0FBVztJQUMzQixVQUFVLEVBQUUsU0FBUztJQUVyQixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixVQUFVLEVBQUUsa0JBQWtCO0tBQy9CO0lBRUQsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUN4QixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ3pCLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtJQUMzQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0lBQzNCLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDekIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtJQUM1QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFFckMsSUFBSSxFQUFFO1FBQ0osU0FBUztRQUNULGFBQWE7UUFDYixlQUFlO1FBQ2YsU0FBUztRQUNULGFBQWE7UUFDYixlQUFlO0tBQ2hCO0lBRUQsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLENBQUM7UUFDYixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFFRCxLQUFLLEVBQUU7UUFDTCxhQUFhLEVBQUUsUUFBUTtRQUN2QixTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLENBQUM7UUFDWCxVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFO0tBQ1o7SUFFRCxNQUFNLEVBQUU7UUFDTixTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsZUFBZTtLQUNoQjtJQUVELEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQ3BDLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYyxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO0tBQzdCO0NBQ0YsQ0FBQztBQUVGLGVBQWUsWUFBWSxDQUFDIn0=