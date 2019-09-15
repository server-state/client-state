import React from 'react';

import 'react-vis/dist/style.css';
import {
    XYPlot, LineMarkSeries,
    makeWidthFlexible, VerticalGridLines, HorizontalGridLines, XAxis, YAxis
} from 'react-vis';

const RespXYPlot = makeWidthFlexible(XYPlot);

export default function LineChart(props) {
    return (
        <RespXYPlot yPadding={20} height={200} style={{'max-width': '100%'}}>

            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineMarkSeries data={props.data} />
        </RespXYPlot>
    )
}
