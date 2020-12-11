import React, { useState } from "react"
import Sorteo from "../models/Sorteo"
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { textTheme } from "./themes/Themes"
import { ThemeProvider } from '@material-ui/core/styles'
import { postSorteo } from '../repository/Sorteos'
import CircularProgress from '@material-ui/core/CircularProgress'
import { postBill } from '../repository/Bills'
import { Compra } from '../models/Compra'
function BuyDraw({ drawId }) {

    const [numbers, setNumbers] = useState([])
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [count, setCount] = useState(0)

    function handleAdd() {
        if (number.value) {

            const newNumbers = [...numbers, { drawId: drawId, number: Number(number.value), investment: Number(investment.value) }]

            setNumbers(newNumbers)
        }
    }

    async function handleSend() {
        try {
            if (numbers.length) {
                const date = new Date()
                const dateS = date.toLocaleDateString().replaceAll("/","-").split("-").reverse()
                const dateF = dateS.map((value,index,array)=>{
                    if((index+1) != array.length){
                          return value + "-"
                     }
                })
              
                const final = (dateF + dateS[dateS.length-1]).replaceAll(",","")
           
              

                setOpen(true)
               
                const response = await postBill({numbers: numbers,date: final + "T00:00:00"})
                setNumbers([])
                setMessage('Success')
                setCount(count + 1)
                setOpen(false)
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (<Box>

        <form className="usersSubmit">
            <p>Numeros comprados: </p>

            <ul>
                {numbers.map((value, index, array) => {
                    return <li key={count+1}> {'[ Numero: ' + value.number + ' Inversion: ' + value.investment + ' ]'}</li>
                })}
            </ul>

            <p>{message ? 'Se ha hecho tu compra #' + count : 'Aun no has hecho ninguna compra'}</p>

            <ThemeProvider theme={textTheme}>
                <Box mt={1} width="300">
                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="number" name="number" label="Numero" variant="filled" required />
                    </Box>

                    <Box display="flex" flexDirection="column" mt={1}>
                        <TextField id="investment" label="Inversion" name="inversion" variant="filled" required />
                    </Box>
                </Box>
                <Box mt={1}>
                    <Box mr={1}>
                        {open ? null : <Button variant="contained" color="secondary" onClick={handleAdd}>Agregar </Button>}
                    </Box>
                    <Box mt={1}>
                        {open ? null : <Button variant="contained" color="primary" onClick={handleSend}>Finalizar compra </Button>}
                    </Box>

                    {open ? <CircularProgress color="primary" /> : null}
                </Box>
            </ThemeProvider>
        </form>
    </Box>);
}

export default BuyDraw