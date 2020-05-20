import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {search} from '../../lib/fem-registry-client';
import FEMOverview from "./fem-overview";

export default function FEMGrid(props) {
    const [fems, setCbms] = useState(/*[1,1,1]*/null);

    if (!fems) {
        search(props.query).then(res => setCbms(res));
    }

    if (fems) {
        if (fems.length < 1) {
            return <p>None found</p>
        } else {
            return <>
                {fems.map(femId => <FEMOverview femId={femId}/>)}
            </>
        }
    } else {
        return <p>Loading</p>
    }
}

FEMGrid.propTypes = {
    query: PropTypes.string
};

FEMGrid.defaultProps = {
    query: ''
};

