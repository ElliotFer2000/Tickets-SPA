import React, { useState } from "react"
import Sorteo from "../models/Sorteo"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { putSorteo } from '../repository/Sorteos'
import CircularProgress from '@material-ui/core/CircularProgress'
import Ganador from '../models/Ganador'

function WinnerForm({ onSubmit,idDraw}) {
    const [openProgress, setOpenProgress] = useState(false)
    const [message,setMessage] = useState('')
   
    async function onSubmitClick(event) {
        if (winner.value) {
            const ganador = new Ganador(Number(winner.value))
            try {
                setOpenProgress(true)
                const { status } = await putSorteo(ganador)
                setOpenProgress(false)
                setMessage('Se agrego el numero ganador')
                onSubmit(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (<Box width={300}>
        <form className="usersSubmit">
            <ThemeProvider theme={textTheme}>
                <Box mt={1}>
                   <TextField id="drawId" type="hidden" value={idDraw} />
                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="winner" name="winner" label="Numero ganador" variant="filled" required />
                    </Box>
                </Box>
                <Box mt={1}>
                    {openProgress ? <CircularProgress color="primary" /> : <Button variant="contained" color="primary" onClick={onSubmitClick}>Agregar</Button>}
                    {message}
                </Box>
            </ThemeProvider>
        </form>
    </Box>);
}

export default WinnerForm;