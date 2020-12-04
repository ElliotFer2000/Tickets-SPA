import React from "react";
import { getSorteos,postSorteo } from "../repository/Sorteos";
import SubmitDraw from "./DrawForm";

class DrawsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }

    }
    render() {

        return (
            <div>
                <SubmitDraw postSorteo={postSorteo} getSorteos={getSorteos} refreshTable={this.onNewSorteoSubmitted.bind(this)}/>
                <table className="DataTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha de realizacion</th>
                            <th>Hora de realizacion</th>
                            <th>Numero ganador</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, index, array) => {
                            const [date, time] = value["date"].split('T')
                            const drawId = value['drawId']
                            const winner = value['winner']

                            return (<tr key={index}>
                                <td>{drawId}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{winner ? winner : "Indefinido"}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>)
    }

    onDataReady(value) {
        this.setState({ data: value })
    }

    componentDidMount() {
         getSorteos().then(this.onDataReady.bind(this))
    }

    onNewSorteoSubmitted(value){
        this.setState({data: value})
    }
}

export default DrawsTable