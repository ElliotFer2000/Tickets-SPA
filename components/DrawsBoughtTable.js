import React from "react";
import BuyDraw from "./BuyDraw";
import Box from "@material-ui/core/Box"

function DrawsBoughtTable(props) {
    return (
        <div>
            <BuyDraw />
            <Box>
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
            </Box>

        </div>)
}

export default DrawsBoughtTable