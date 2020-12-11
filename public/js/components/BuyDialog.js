import WinnerForm from './WinnerForm'
import React, { useState } from "react"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import BuyDraw from './BuyDraw'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function BuyDialog({handleClose, open,onSubmit,drawId}) {
    const classes = useStyles();
    
    alert(drawId)
    return (
        <div>
            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <ThemeProvider theme={textTheme}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Box display="flex" justifyContent="space-between" width="100%">
                                <h1>Numero ganador</h1>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%" >
                        <BuyDraw drawId={drawId}/>
                    </Box>
                </ThemeProvider>
            </Dialog>
        </div>)
}


export default BuyDialog