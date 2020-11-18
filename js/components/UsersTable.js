import React from "react";
import { GetUsuarios } from "../repository/Usuarios";


class UsersTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }

    }
    render() {

        return (<table className="DataTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Username</th>
                    <th>Clave de acceso</th>
                    <th>Rol</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((value, index, array) => {
                    return (<tr key={index}>
                        <td>{value['userId']}</td>
                        <td>{value['firstNames']}</td>
                        <td>{value['lastNames']}</td>
                        <td>{value['userName']}</td>
                        <td>{value['password']}</td>
                        <td>{value['role']['description']}</td>
                        <td>{value['state']['description']}</td>
                    </tr>);
                })}
            </tbody>
        </table>)
    }

    onDataReady(value) {
        this.setState({ data: value })
    }

    componentDidMount() {
        GetUsuarios().then(this.onDataReady.bind(this))
    }
}

export default UsersTable