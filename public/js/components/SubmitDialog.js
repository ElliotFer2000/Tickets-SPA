import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { postSorteo } from '../repository/Sorteos';
import SubmitDraw from './DrawForm';
import Box from '@material-ui/core/Box'

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


export default function FullScreenDialog({ handleClose, open }) {
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleSubmission = async () => {
    const resp = await postSorteo()
  }

  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <h1>Nuevo sorteo</h1>
          </Toolbar>
        </AppBar>
        <Box display="flex" justifyContent="center" alignItems="center">
          <SubmitDraw />
        </Box>

      </Dialog>
    </div>
  );
}


