import React, { useState, useEffect } from "react";
import { getSorteos, postSorteo } from "../repository/Sorteos";
import { makeStyles } from '@material-ui/core/styles';
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
import WinnerDialog from './WinnerDialog'
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



function DrawsTable(props) {
    const classes = useStyles();
    const [value, setValue] = useState([])
    const [openSubmit, setOpenSubmit] = useState(false)
    const [openWinner, setOpenWinner] = useState(false)
    const [load, setLoad] = useState(false)
    const [currentId, setCurrentId] = useState(0)

    function handleOpenSubmit() {
        setOpenSubmit(true)
    }

    function handleOpenWinner(event) {
        setCurrentId(currentId)
        setOpenWinner(true)
    }

    function handleCloseSubmit() {
        setOpenSubmit(false)
    }

    function handleCloseWinner(){
        setOpenWinner(false)
    }

    useEffect(async () => {
        if (!load) {
            const sorteos = await getSorteos()
            setValue(sorteos)
            if (open) {
                //setOpenSubmit(false)
            }
            setLoad(true)
        }
    })

    return (
        <Box mt={9}>
            <FullScreenDialog open={openSubmit} handleClose={handleCloseSubmit} onSubmit={setLoad} />
            <WinnerDialog open={openWinner} handleClose={handleCloseWinner} onSubmit={setLoad} idDraw={currentId}/>
            <Box mb={1}>
                <Button variant="contained" color="primary" onClick={handleOpenSubmit}>
                    Nuevo Sorteo
                 </Button>
            </Box>

            <TableContainer component={Paper} >
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <ThemeProvider theme={textTheme} >
                                <TableCell align="right">Numero ganador</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Fecha de realizacion</TableCell>
                                <TableCell align="right">Hora de realizacion</TableCell>
                            </ThemeProvider>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {value.map((value) => {
                            const [date, time] = value["date"].split('T')
                            const drawId = value['drawId']
                            const winner = value['winner']

                            return (<TableRow key={drawId}>
                                <TableCell component="th" scope="row" align="right">{winner ? winner : <Button variant="contained" color="primary" id={drawId} onClick={handleOpenWinner}>Agregar Ganador</Button>}</TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    {drawId}
                                </TableCell>
                                <TableCell align="right">{date}</TableCell>
                                <TableCell align="right">{time}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>)
}
export default DrawsTable