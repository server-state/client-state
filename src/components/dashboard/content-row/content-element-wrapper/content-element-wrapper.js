import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography, Divider, Link, IconButton, LinearProgress,
    Card, CardHeader, CardContent
} from '@material-ui/core';
import {
    MoreVert as MoreVertIcon
} from '@material-ui/icons';

import elementComponents from '../../../../config/component-registry';
import {fullURL} from '../../../../lib/api';
import ElementAvatar from './element-avatar';

import CEWState from './content-element-wrappers.state';
import {useMachine} from "@xstate/react/lib";
import CEWErrorBoundary from "./cew-error-boundary";

import parseDynamicCode from './parse-cbm';

function ContentElementWrapper({element: {component, name, path}}) {
    let CBMComponent;

    const [current, send] = useMachine(CEWState.withContext({
        module: path,
        data: undefined,
        errorMessage: undefined
    }));

    const cbmData = (parseDynamicCode(
        window.localStorage.getItem('code')
    ));
    CBMComponent = cbmData.component;
    console.log(cbmData.info);
    let innerContent;

    switch (current.value) {
        case 'loaded':
            innerContent =
                CBMComponent ? <CBMComponent data={current.context.data} minWidth={100}/> : 'undefined';
            break;
        case 'error':
            innerContent =
                <>
                    <Typography variant={'h5'} color={'error'}>
                        Error
                    </Typography>
                    <Typography variant={'body1'} color={'error'}>
                        {current.context.errorMessage}
                    </Typography>
                    <Link onClick={() => send('RELOAD')}>
                        Retry
                    </Link>
                </>;
            break;
        default:
            innerContent = <LinearProgress/>;
    }
    // language=JavaScript
    return (
        <Card style={{'height': '100%'}}>
            <CardHeader
                avatar={
                    <ElementAvatar name={name}/>
                }
                action={
                    <IconButton aria-label="expand">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={name}
                subheader={
                    <Link href={fullURL(path)} target={'_blank'} color={'inherit'}>
                        {path}
                    </Link>
                }/>

            <Divider light variant="middle"/>
            <CardContent>
                <CEWErrorBoundary onError={error => send({type: 'ERROR', data: error})}>
                    {innerContent}
                </CEWErrorBoundary>
            </CardContent>
        </Card>
    );


}

ContentElementWrapper.propTypes = {
    element: PropTypes.object.isRequired
};

export default ContentElementWrapper;
