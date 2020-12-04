import React from "react"
import Sorteo from "../models/Sorteo"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'

function SubmitDraw(props) {

    const postSorteo = props['postSorteo']
    const getSorteos = props['getSorteos']
    const refreshTable = props['refreshTable']


    function onSorteoPosted(response) {

        if (response.status === 201) {
            getSorteos().then(refreshTable).catch((err) => {
                console.log(err)
            })
        }
    }

    function onSubmitClick(event) {

        if (fecha.value && hora.value) {
            console.log(fecha.value + "T" + hora.value)
            const sorteo = new Sorteo(fecha.value + "T" + hora.value)
            postSorteo(sorteo).then(onSorteoPosted).catch((err) => {
                console.log(err)
            })
        }
    }

    return (<Box mt={8}>
        <form className="usersSubmit">
            <ThemeProvider theme={textTheme}>
                <Box mt={1}>
                    <label htmlFor="fecha">Fecha  (AAAA-mm-dd)</label>
                    <input type="text" placeholder="Fecha" name="fecha" required id="fecha" />
                </Box>
                <Box mt={1}>
                    <label htmlFor="hora">Hora (hh:mm 24hrs)</label>
                    <input type="text" placeholder="Hora" name="hora" required id="hora" />
                </Box>
                <Box mt={1}>
                    <Button variant="contained" color="primary" onClick={onSubmitClick}>
                        Agregar
                    </Button>
                </Box>
            </ThemeProvider>
        </form>
    </Box>);
}

export default SubmitDraw;