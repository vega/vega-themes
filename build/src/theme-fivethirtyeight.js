const markColor = '#30a2da';
const axisColor = '#cbcbcb';
const guideLabelColor = '#999';
const guideTitleColor = '#333';
const backgroundColor = '#f0f0f0';
const blackTitle = '#333';
const fiveThirtyEightTheme = {
    arc: { fill: markColor },
    area: { fill: markColor },
    axis: {
        domainColor: axisColor,
        grid: true,
        gridColor: axisColor,
        gridWidth: 1,
        labelColor: guideLabelColor,
        labelFontSize: 10,
        titleColor: guideTitleColor,
        tickColor: axisColor,
        tickSize: 10,
        titleFontSize: 14,
        titlePadding: 10,
        labelPadding: 4
    },
    axisBand: {
        grid: false
    },
    background: backgroundColor,
    group: {
        fill: backgroundColor
    },
    legend: {
        labelColor: blackTitle,
        labelFontSize: 11,
        padding: 1,
        symbolSize: 30,
        symbolType: 'square',
        titleColor: blackTitle,
        titleFontSize: 14,
        titlePadding: 10
    },
    line: {
        stroke: markColor,
        strokeWidth: 2
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
            '#9fe4f8'
        ],
        diverging: ['#cc0020', '#e77866', '#f6e7e1', '#d6e8ed', '#91bfd9', '#1d78b5'],
        heatmap: ['#d6e8ed', '#cee0e5', '#91bfd9', '#549cc6', '#1d78b5']
    },
    point: {
        filled: true,
        shape: 'circle'
    },
    shape: { stroke: markColor },
    style: {
        bar: {
            binSpacing: 2,
            fill: markColor,
            stroke: null
        }
    },
    title: {
        anchor: 'start',
        fontSize: 24,
        fontWeight: 600,
        offset: 20
    }
};
export default fiveThirtyEightTheme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtZml2ZXRoaXJ0eWVpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RoZW1lLWZpdmV0aGlydHllaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDNUIsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzVCLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQztBQUMvQixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUM7QUFDL0IsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUUxQixNQUFNLG9CQUFvQixHQUFXO0lBQ25DLEdBQUcsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7SUFDdEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztJQUV2QixJQUFJLEVBQUU7UUFDSixXQUFXLEVBQUUsU0FBUztRQUN0QixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRSxDQUFDO1FBQ1osVUFBVSxFQUFFLGVBQWU7UUFDM0IsYUFBYSxFQUFFLEVBQUU7UUFDakIsVUFBVSxFQUFFLGVBQWU7UUFDM0IsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsQ0FBQztLQUNoQjtJQUVELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxLQUFLO0tBQ1o7SUFFRCxVQUFVLEVBQUUsZUFBZTtJQUUzQixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsZUFBZTtLQUN0QjtJQUVELE1BQU0sRUFBRTtRQUNOLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsVUFBVSxFQUFFLEVBQUU7UUFDZCxVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsVUFBVTtRQUN0QixhQUFhLEVBQUUsRUFBRTtRQUNqQixZQUFZLEVBQUUsRUFBRTtLQUNqQjtJQUVELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUM7SUFDM0MsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztJQUV2QixLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUU7WUFDUixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVjtRQUVELFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1FBQzdFLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7S0FDakU7SUFFRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0lBRUQsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQztJQUUxQixLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUU7WUFDSCxVQUFVLEVBQUUsQ0FBQztZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLElBQUk7U0FDYjtLQUNGO0lBRUQsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsTUFBTSxFQUFFLEVBQUU7S0FDWDtDQUNGLENBQUM7QUFFRixlQUFlLG9CQUFvQixDQUFDIn0=