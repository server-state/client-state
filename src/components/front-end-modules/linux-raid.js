import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Chip, ButtonGroup, Button, Divider, LinearProgress } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    heading: {
        paddingRight: theme.spacing(1),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        color: theme.palette.text.secondary
    },
    details: {
        display: 'block'
    },
    element: {
        margin: theme.spacing(1, 0)
    },
    chip: {
        borderColor: theme.palette.success.text,
        color: theme.palette.success.text
    },
    chipDeg: {
        borderColor: theme.palette.warning.text,
        color: theme.palette.warning.text
    },
    chipFailed: {
        borderColor: theme.palette.error.text,
        color: theme.palette.error.text
    },
    chipInfo: {
        borderColor: theme.palette.information.text,
        color: theme.palette.information.text
    },
}));

function LinuxRaid(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography className={classes.heading}>myRaid1</Typography>
                    <Chip className={classes.chip} variant="outlined" size="small" label="active" />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>

                    <ButtonGroup className={classes.element} fullWidth color="secondary" variant="contained">
                        <Button>dev1</Button>
                        <Button>dev2</Button>
                        <Button>dev3</Button>
                        
                    </ButtonGroup>
                    <ButtonGroup className={classes.element} fullWidth color="secondary" variant="contained">
                        <Button>dev4</Button>
                        <Button>dev5</Button>
                        <Button>dev6</Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.element} fullWidth color="secondary" variant="contained">
                        <Button>dev7</Button>
                    </ButtonGroup>

                    <LinearProgress variant="buffer" value={30} valueBuffer={50} />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>myRaid2</Typography>
                    <Chip className={classes.chipDeg} variant="outlined" size="small" label="degraded" />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel3-header"
                >
                    <Typography className={classes.heading}>myRaid3</Typography>
                    <Chip className={classes.chipFailed} variant="outlined" size="small" label="failed" />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel4-header"
                >
                    <Typography className={classes.heading}>myRaid4</Typography>
                    <Chip className={classes.chipInfo} variant="outlined" size="small" label="scanning" />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

LinuxRaid.propTypes = {
    data: PropTypes.object.isRequired
};


const info = {
    name: 'linuxRaid',
    version: 'v1.0.0'
};

export default { component: LinuxRaid, info };