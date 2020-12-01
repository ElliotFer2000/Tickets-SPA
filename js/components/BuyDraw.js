import React, { useEffect, useState } from "react"
import { getSorteos } from "../repository/Sorteos"

function BuyDraw(props) {

    const [data, setData] = useState([]);

    function onDataReady(value) {
        setData(value)
    }

    useEffect(() => {
        getSorteos().then(onDataReady)
    });

    return (
        <section>
            <h2 style={{textAlign: 'left'}}>Comprar un numero</h2>
            <form>
                <div>
                    <label htmlFor="numero">¿Que Numero que desea jugar?</label>
                    <input type="text" id="numero" required />
                </div>
                <div>
                    <label htmlFor="sorteos">
                        Escoja el sorteo
            </label>
                    <select name="sorteos" id="sorteos">
                        {data.map((value, index, array) => {
                            const [date, time] = value["date"].split('T')
                            return (<option value={value['drawId']} key={value['drawId']}>{date},{time}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="inversion">¿Con cuanto jugara este numero?</label>
                    <input type="text" id="inversion" required />
                </div>
                <div>
                    <button>Comprar</button>
                </div>
            </form>
        </section>);
}

export default BuyDraw