import React from 'react';

import 'react-vis/dist/style.css';
import {
    makeWidthFlexible, Treemap
} from 'react-vis';

const RespXYPlot = makeWidthFlexible(Treemap);

export default function TreeMap(props) {
    return (
        <RespXYPlot
            data={props.data}
            height={300}
            padding={10}
            getSize={d => d.value}
            mode={'partition'}
            renderMode={'DOM'}
        />
    )
}
