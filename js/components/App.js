import 'regenerator-runtime/runtime'
import "../../css/app.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Nav from "./Nav"
import Header from "./Header"
import DrawsTable from "./DrawsTable"
import UsersTable from "./UsersTable"
import Login from "./Login"
import DrawsBoughtTable from './DrawsBoughtTable'
import PrivateRoutes from './PrivateRoutes'
class App extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (<div>

            <Switch>
                <Route path="/">
                    <Header sectionDesc="Compra y venta de loteria" />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>

                <PrivateRoutes>
                    <Route path="/Home">
                        <Header sectionDesc="Pagina Home" />
                    </Route>
                    <Route path="/BuySorteos">
                        <Nav />
                        <Header sectionDesc="Compra de jugadas" />
                        <DrawsBoughtTable />
                    </Route>
                    <Route path="/Sorteos">
                        <Nav />
                        <Header sectionDesc="Todos los sorteos" />
                        <DrawsTable />
                    </Route>
                    <Route path="/Usuarios">
                        <Nav />
                        <Header sectionDesc="Todos los usuarios" />
                        <UsersTable />
                    </Route>
                    <Route path="*">
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