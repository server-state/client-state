import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#546e7a'
        },
        secondary: {
            main: '#ffca28'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        }
    }
});

export default theme;