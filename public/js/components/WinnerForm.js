import React, { useState } from "react"
import Sorteo from "../models/Sorteo"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { postSorteo } from '../repository/Sorteos'
import CircularProgress from '@material-ui/core/CircularProgress'
import Ganador from '../models/Ganador'

function WinnerForm({ onSubmit,idDraw }) {
    const [openProgrees, setOpenProgress] = useState(false)
    const [message,setMessage] = useState('')
   
    async function onSubmitClick(event) {
        if (numero.value) {
            const ganador = new Ganador(numero.value,idDraw)
            try {
                setOpenProgress(true)
                const { status } = await postGanador(ganador)
                setOpenProgress(false)
                setMessage('Se agrego el numero ganador')
                onSubmit(false)
            } catch (err) {
                console.log('error submit winner')
            }
        }
    }

    return (<Box width={300}>
        <form className="usersSubmit">
            <ThemeProvider theme={textTheme}>
                <Box mt={1}>
                   <TextField id="idDraw" type="hidden" value={idDraw} />
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