import React from "react";
import BuyDraw from "./BuyDraw";

function DrawsBoughtTable(props){
    return (
        <div>
            <BuyDraw/>
            <table className="DataTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Numero</th>
                        <th>$ Inversion</th>
                        <th>Fecha de sorteo</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>)
}

export default DrawsBoughtTable