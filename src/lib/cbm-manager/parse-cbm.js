import Sval from 'sval';

import React from 'react';
import propTypes from 'prop-types';
import * as core from '@material-ui/core';
import * as icons from '@material-ui/icons';
import * as styles from '@material-ui/styles';

const providedDependencies = {
    'react': React,
    'prop-types': propTypes,
    '@material-ui/core': core,
    '@material-ui/icons': icons,
    '@material-ui/styles': styles
};

const interpreter = new Sval({sandBox: true});

interpreter.import('require', (name) => {
    if (providedDependencies.hasOwnProperty(name))
        return providedDependencies[name];
    else
        throw new Error(`Unknown dependency: ${name}`);
});

export default function (code) {
    interpreter.run('module = {};'+code+'exports.default=module.exports;');
    return interpreter.exports.default;
}
