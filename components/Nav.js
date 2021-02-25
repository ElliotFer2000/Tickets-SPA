import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import {AppContext} from './Context'

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
});

function Nav(props) {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const context = useContext(AppContext)


    const onOptionsChange = (event, newValue) => {
      
    }

    if (context.userName === 'elliotfrm') {

        return (
            <ThemeProvider theme={textTheme}>
                <BottomNavigation
                    value={props.value}
                    onChange={onOptionsChange}
                    showLabels
                    className={classes.root}>

                    <BottomNavigationAction component={Link} to='/Home' label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} to='/Sorteos' label="Sorteos" icon={<BlurOnIcon />} />
                    <BottomNavigationAction component={Link} to='/Compras' label="Compras" icon={<BlurOnIcon />} />
                </BottomNavigation>
            </ThemeProvider>);
    }

    return (
        <ThemeProvider theme={textTheme}>
            <BottomNavigation
                value={props.value}
                onChange={onOptionsChange}
                showLabels
                className={classes.root}>

                <BottomNavigationAction component={Link} to='/Home' label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction component={Link} to='/Sorteos' label="Sorteos" icon={<BlurOnIcon />} />
            </BottomNavigation>
        </ThemeProvider>);
}

export default Nav