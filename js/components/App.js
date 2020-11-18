import 'regenerator-runtime/runtime'
import "../../css/app.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Nav from "./Nav"
import Header from "./Header"
import UsersTable from "./UsersTable"

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Nav />
            <Switch>
                <Route path="/Sorteos">
                    <Header sectionDesc="Todos los sorteos" />
                </Route>
                <Route path="/Usuarios">
                    <Header sectionDesc="Todos los usuarios" />
                    <UsersTable />
                </Route>
                <Route path="/">
                    <Header sectionDesc="Pagina principal" />
                </Route>
            </Switch>

        </div>);
    }
}

const Router = (<BrowserRouter>
    <App />
</BrowserRouter>);

ReactDOM.render(Router, root)