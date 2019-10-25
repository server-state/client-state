import {amber, blueGrey, red, green, orange} from '@material-ui/core/colors';
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
            main: red.A400,
        },
        success: {
            main: green.A700,
            text: 'black'
        },
        failed: {
            main: red.A700,
            text: 'black'
        },
        warning: {
            main: orange.A700,
            text: 'black'
        }
    }
});

export default theme;
