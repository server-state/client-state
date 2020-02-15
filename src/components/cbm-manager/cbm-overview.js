import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {cbmDetails} from '../../lib/cbm-registry-client';

export default function CBMOverview(props) {
    const [details, setDetails] = useState(null);

    if (!details)
        cbmDetails(props.cbmId).then(res => setDetails(res));

    if (details) {
        return <>
            <h1>{details.name}</h1>
            <p><span className={'author'}>{details.publisher.name}</span></p>
            <p>{details.release.description}</p>
        </>
    } else {
        return <p>Loading</p>
    }
}

CBMOverview.propTypes = {
    cbmId: PropTypes.number.isRequired
};
