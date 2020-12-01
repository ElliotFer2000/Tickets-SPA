import React from "react";
import Sorteo from "../models/Sorteo";

function SubmitDraw(props) {

    const postSorteo = props['postSorteo']
    const getSorteos = props['getSorteos']
    const refreshTable = props['refreshTable']


    function onSorteoPosted(response){
       
        if(response.status === 201){
            getSorteos().then(refreshTable).catch((err)=>{
                console.log(err)
            })
        }
    }

    function onSubmitClick(event){
     
        if(fecha.value && hora.value){
            const sorteo = new Sorteo(fecha.value + "T" + hora.value)
            postSorteo(sorteo).then(onSorteoPosted).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (<form className="usersSubmit">
        <div className="usersSubmit__wrapper">
            <label htmlFor="fecha">Fecha  (AAAA-mm-dd)</label>
            <input type="text" placeholder="Fecha" name="fecha" required id="fecha" />
        </div>
        <div className="usersSubmit__wrapper">
            <label htmlFor="hora">Hora (hh:mm 24hrs)</label>
            <input type="text" placeholder="Hora" name="hora" required id="hora" />
        </div>
        <div className="usersSubmit__wrapper usersSubmit__wrapper--btnSubmit">
            <button type="button" onClick={onSubmitClick}>Agregar</button>
        </div>
    </form>);
}

export default SubmitDraw;