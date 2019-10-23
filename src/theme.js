import {amber, blueGrey, red} from '@material-ui/core/colors';
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
            main: red.A400
        },
    }
});

export default theme;
