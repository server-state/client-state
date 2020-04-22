import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {femDetails} from '../../lib/fem-registry-client';

export default function FEMOverview(props) {
    const [details, setDetails] = useState(null);

    if (!details)
        femDetails(props.femId).then(res => setDetails(res));

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

FEMOverview.propTypes = {
    femId: PropTypes.number.isRequired
};
