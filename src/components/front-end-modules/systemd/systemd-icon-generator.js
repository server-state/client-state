import React from 'react';
import PropTypes from 'prop-types';
import {
    CropFree as CropFreeIcon,
    Settings as SettingsIcon,
    Eject as EjectIcon,
    AccountTree as AccountTreeIcon,
    Timer as TimerIcon,
    SwapVert as SwapVertIcon,
    Description as DescriptionIcon,
    Adjust as AdjustIcon,
    Storage as StorageIcon,
    People as PeopleIcon,
    SettingsInputComponent as SettingsInputComponentIcon
} from '@material-ui/icons';


// unit name icon registry
const nameRegistry = {
    // add here unit specfic icons
};

// unit type registry
const typeRegistry = {
    service: SettingsIcon,
    mount: EjectIcon,
    slice: AccountTreeIcon,
    automount: EjectIcon,
    timer: TimerIcon,
    swap: SwapVertIcon,
    path: DescriptionIcon,
    target: AdjustIcon,
    device: StorageIcon,
    scope: PeopleIcon,
    socket: SettingsInputComponentIcon
};

class SystemdIconGenerator extends React.Component {
    render() {
        // take a look in the icon registry for this unit name
        // if there was no icon found, use unit type icons
        // and if there is no icon, use the fallback
        const Icon = 
            nameRegistry[this.props.name] || 
            typeRegistry[this.props.type] || 
            CropFreeIcon;
        
        return (
                <Icon />
        );
    }
}

SystemdIconGenerator.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
};

export default SystemdIconGenerator;