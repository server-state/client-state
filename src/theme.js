import {amber, blueGrey, red, green, yellow, blue, grey, deepOrange} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey["700"],
            dark: blueGrey['500']
        },
        secondary: {
            main: amber['500']
        },
        error: {
            main: deepOrange["A400"],
        },
        warning: {
            main: amber["A400"]
        },
        success: {
            main: green["A700"]
        },
        information: {
            main: blue["A700"]
        },
        disabled: {
            main: grey["400"]
        }
    }
});

export default theme;
