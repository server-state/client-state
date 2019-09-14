import React from 'react';

import 'react-vis/dist/style.css';
import {
    XYPlot, LineSeries,
    makeWidthFlexible, VerticalGridLines, HorizontalGridLines, XAxis, YAxis
} from 'react-vis';

const RespXYPlot = makeWidthFlexible(XYPlot);

export default function LineChart(props) {
    return (
        <RespXYPlot yPadding={20} height={300}>
            <LineSeries data={props.data} />

            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
        </RespXYPlot>
    )
}
