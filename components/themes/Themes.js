import {createMuiTheme } from '@material-ui/core/styles';
const headingTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Abril Fatface',
            'cursive'
        ].join(','),
    },
});

const textTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Prompt',
            'sans-serif'
        ].join(','),
    },
});

export {headingTheme,textTheme}