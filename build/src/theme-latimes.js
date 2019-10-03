const headlineFontSize = 22;
const headlineFontWeight = 'normal';
const labelFont = 'Benton Gothic, sans-serif';
const labelFontSize = 11.5;
const labelFontWeight = 'normal';
const markColor = '#82c6df';
// const markHighlight = '#006d8f';
// const markDemocrat = '#5789b8';
// const markRepublican = '#d94f54';
const titleFont = 'Benton Gothic Bold, sans-serif';
const titleFontWeight = 'normal';
const titleFontSize = 13;
const colorSchemes = {
    'category-6': ['#ec8431', '#829eb1', '#c89d29', '#3580b1', '#adc839', '#ab7fb4'],
    'fire-7': ['#fbf2c7', '#f9e39c', '#f8d36e', '#f4bb6a', '#e68a4f', '#d15a40', '#ab4232'],
    'fireandice-6': ['#e68a4f', '#f4bb6a', '#f9e39c', '#dadfe2', '#a6b7c6', '#849eae'],
    'ice-7': ['#edefee', '#dadfe2', '#c4ccd2', '#a6b7c6', '#849eae', '#607785', '#47525d']
};
const latimesTheme = {
    background: '#ffffff',
    title: {
        anchor: 'start',
        color: '#000000',
        font: titleFont,
        fontSize: headlineFontSize,
        fontWeight: headlineFontWeight
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
        titleFontWeight
    },
    axisX: {
        labelAngle: 0,
        labelPadding: 4,
        tickSize: 3
    },
    axisY: {
        labelBaseline: 'middle',
        maxExtent: 45,
        minExtent: 45,
        tickSize: 2,
        titleAlign: 'left',
        titleAngle: 0,
        titleX: -45,
        titleY: -11
    },
    legend: {
        labelFont,
        labelFontSize,
        symbolType: 'square',
        titleFont,
        titleFontSize,
        titleFontWeight
    },
    range: {
        category: colorSchemes['category-6'],
        diverging: colorSchemes['fireandice-6'],
        heatmap: colorSchemes['fire-7'],
        ordinal: colorSchemes['fire-7'],
        ramp: colorSchemes['fire-7']
    }
};
export default latimesTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbGF0aW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS1sYXRpbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFDO0FBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFDakMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzVCLG1DQUFtQztBQUNuQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLE1BQU0sU0FBUyxHQUFHLGdDQUFnQyxDQUFDO0FBQ25ELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFFekIsTUFBTSxZQUFZLEdBQUc7SUFDbkIsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7SUFDaEYsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQ3ZGLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQ2xGLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztDQUN2RixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQVc7SUFDM0IsVUFBVSxFQUFFLFNBQVM7SUFFckIsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsVUFBVSxFQUFFLGtCQUFrQjtLQUMvQjtJQUVELEdBQUcsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7SUFDdEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztJQUN2QixJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUM7SUFDekMsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQztJQUN6QixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ3ZCLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUM7SUFDMUIsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0lBRW5DLElBQUksRUFBRTtRQUNKLFNBQVM7UUFDVCxhQUFhO1FBQ2IsZUFBZTtRQUNmLFNBQVM7UUFDVCxhQUFhO1FBQ2IsZUFBZTtLQUNoQjtJQUVELEtBQUssRUFBRTtRQUNMLFVBQVUsRUFBRSxDQUFDO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBRUQsS0FBSyxFQUFFO1FBQ0wsYUFBYSxFQUFFLFFBQVE7UUFDdkIsU0FBUyxFQUFFLEVBQUU7UUFDYixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxDQUFDO1FBQ1gsVUFBVSxFQUFFLE1BQU07UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFO1FBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRTtLQUNaO0lBRUQsTUFBTSxFQUFFO1FBQ04sU0FBUztRQUNULGFBQWE7UUFDYixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTO1FBQ1QsYUFBYTtRQUNiLGVBQWU7S0FDaEI7SUFFRCxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUNwQyxTQUFTLEVBQUUsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUN2QyxPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztLQUM3QjtDQUNGLENBQUM7QUFFRixlQUFlLFlBQVksQ0FBQyJ9