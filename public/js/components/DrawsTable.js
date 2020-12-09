import React, { useState, useEffect } from "react";
import { getSorteos, postSorteo } from "../repository/Sorteos";
import { makeStyles } from '@material-ui/core/styles';
import SubmitDraw from "./DrawForm";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper';
import { textTheme } from './themes/Themes';
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FullScreenDialog from './SubmitDialog';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



function DrawsTable(props) {
    const classes = useStyles();
    const [value, setValue] = useState([])
    const [open, setOpen] = useState(false)

    let dataShouldLoad = true

    function onDataReady(value) {
        setValue(value)
    }

    function onSubmitDraw() {

    }

    function onNewSorteoSubmitted(value) {
        //dataShouldLoad = true
        //setValue(value)
    }

    function handleOpenDialog() {
        setOpen(true)
    }

    function handleCloseDialog() {
        setOpen(false)
    }

    useEffect(() => {
        if (dataShouldLoad) {
            getSorteos().then(onDataReady)
            dataShouldLoad = false
        }
    })

    return (
        <Box mt={9}>
            <FullScreenDialog open={open} handleClose={handleCloseDialog} />
            <Box mb={1}>
                <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                    Nuevo Sorteo
                 </Button>
            </Box>

            <TableContainer component={Paper} >
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <ThemeProvider theme={textTheme} >
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Fecha de realizacion</TableCell>
                                <TableCell align="right">Hora de realizacion</TableCell>
                                <TableCell align="right">Numero ganador</TableCell>
                            </ThemeProvider>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {value.map((value) => {
                            const [date, time] = value["date"].split('T')
                            const drawId = value['drawId']
                            const winner = value['winner']

                            return (<TableRow key={drawId}>
                                <TableCell component="th" scope="row">
                                    {drawId}
                                </TableCell>
                                <TableCell align="right">{date}</TableCell>
                                <TableCell align="right">{time}</TableCell>
                                <TableCell align="right">{winner ? winner : "Indefinido"}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>)
}
export default DrawsTable