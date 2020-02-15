import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {search} from '../../lib/cbm-registry-client';
import CBMOverview from "./cbm-overview";
import Axios from 'axios';

export default function CBMGrid(props) {
    const [cbms, setCbms] = useState(/*[1,1,1]*/null);

    if (!cbms) {
        search(props.query).then(res => setCbms(res));
    }
        
    if (cbms) {
        if (cbms.length < 1) {
            return <p>None found</p>
        } else {
            return <>
                {cbms.map(cbmId => <CBMOverview cbmId={cbmId}/>)}
            </>
        }
    } else {
        return <p>Loading</p>
    }
}

CBMGrid.propTypes = {
    query: PropTypes.string
};

CBMGrid.defaultProps = {
    query: ''
};

