import React, { useState } from "react"
import Sorteo from "../models/Sorteo"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { postSorteo } from '../repository/Sorteos'
import CircularProgress from '@material-ui/core/CircularProgress'

function SubmitDraw({ onSubmit }) {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [count, setCount] = useState(0)
    async function onSubmitClick(event) {

        if (fecha.value && hora.value && numero.value) {
            console.log(fecha.value + "T" + hora.value)
            const sorteo = new Sorteo(fecha.value + "T" + hora.value,Number(numero.value))
            try {
                setOpen(true)
                const { status } = await postSorteo(sorteo)
                setOpen(false)
                setCount(count + 1)
                setMessage(` Sorteo guardado, total: ${count+1}`)
                onSubmit(false)

            } catch (err) {
                console.log(err)
            }

        }
    }

    return (<Box>
        <form className="usersSubmit">
            <ThemeProvider theme={textTheme}>
                <Box mt={1} width="300">
                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="fecha" name="fecha" label="Fecha (AAAA-mm-dd)" variant="filled" required />
                    </Box>
                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="hora" label="Hora" name="hora" variant="filled" required />
                    </Box>
                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="numero" label="Numero" name="numero" variant="filled" required />
                    </Box>
                </Box>
                <Box mt={1}>
                    {open ? <CircularProgress color="primary" /> : <Button variant="contained" color="primary" onClick={onSubmitClick}>Agregar </Button>}
                    {!open && message ? <span>{message}</span> : null}
                </Box>
            </ThemeProvider>
        </form>
    </Box>);
}

export default SubmitDraw;