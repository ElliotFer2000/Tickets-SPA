import 'regenerator-runtime/runtime'
import "../../css/app.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Nav from "./Nav"
import Header from "./Header"
import DrawsTable from "./DrawsTable"
import UsersTable from "./UsersTable"
import Login from "./Login"
import DrawsBoughtTable from './DrawsBoughtTable'
import PrivateRoutes from './PrivateRoutes'
import Box from '@material-ui/core/Box'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>


            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Header sectionDesc="Compra y venta de loteria" />
                </Route>

                <PrivateRoutes>
                    <Route path="/Home">
                        <Nav />
                        <Header sectionDesc="Home" />
                        <Box mt={8}>
                            <Link to="/LogOut">Cerrar Sesion</Link>
                        </Box>
                    </Route>
                    <Route path="/BuySorteos">
                        <Nav />
                        <Header sectionDesc="Jugadas" />
                        <DrawsBoughtTable />
                    </Route>
                    <Route path="/Sorteos">
                        <Nav />
                        <Header sectionDesc="Sorteos" />
                        <DrawsTable />
                    </Route>
                    <Route path="/Usuarios">
                        <Nav />
                        <Header sectionDesc="Usuarios" />
                        <UsersTable />
                    </Route>
                    <Route path="/*">
                        <Header sectionDesc="Sorry, page not found 404" />
                    </Route>
                </PrivateRoutes>

            </Switch>
        </div>);
    }
}

const Router = (<BrowserRouter>
    <App />
</BrowserRouter>);
ReactDOM.render(Router, root)