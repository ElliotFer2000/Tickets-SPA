import React, { useState, useEffect,useContext } from "react";
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
import {AppContext} from './Context'



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



function DrawsTable(props) {
    const classes = useStyles();
    const context = useContext(AppContext);
    const [value, setValue] = useState([])
    const [openSubmit, setOpenSubmit] = useState(false)
    const [openWinner, setOpenWinner] = useState(false)
    const [load, setLoad] = useState(false)
    const [currentNumber, setCurrentNumber] = useState(0)


    function handleOpenSubmit() {
        setOpenSubmit(true)
    }

    function handleOpenWinner(event) {
        setCurrentNumber(event.target.id)
        setOpenWinner(true)
    }

    function handleCloseSubmit() {
        setOpenSubmit(false)
    }

    function handleCloseWinner() {
        setOpenWinner(false)
    }

    useEffect(async () => {
        if (!load) {
            const sorteos = await getSorteos()
            setValue(sorteos)

            setLoad(true)
        }
    })

    if (context.email === 'obrlop@gmail.com') {
        return (
            <Box mt={9}>
                <FullScreenDialog open={openSubmit} handleClose={handleCloseSubmit} onSubmit={setLoad} />
                <WinnerDialog open={openWinner} handleClose={handleCloseWinner} onSubmit={setLoad} numberDraw={currentNumber} />
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
                                    <TableCell align="right">Numero de sorteo</TableCell>
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
                                const number = value['number']

                                return (<TableRow key={drawId}>
                                          <TableCell component="th" scope="row" align="right">{winner ? winner : <button variant="contained" color="primary" id={number} onClick={handleOpenWinner}>Agregar Ganador</button>}</TableCell>
                                          <TableCell component="th" scope="row" align="right">
                                                {number}
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

}
export default DrawsTable