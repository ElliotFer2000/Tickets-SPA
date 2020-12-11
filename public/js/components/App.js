import 'regenerator-runtime/runtime'
import '../../img/HomePortrait-lg.gif'
import '../../img/NotFoundPortrait-lg.gif'
import '../../img/HomePortrait-md.gif'
import '../../img/NotFoundPortrait-md.gif'
import '../../img/HomePortrait-sm.gif'
import '../../img/NotFoundPortrait-sm.gif'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import DrawsTable from './DrawsTable'
import Login from './Login'
import DrawsBoughtTable from './DrawsBoughtTable'
import PrivateRoutes from './PrivateRoutes'
import Button from '@material-ui/core/Button'
import { textTheme } from './themes/Themes'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppContext } from './Context'
import HomePortrait from './HomePortrait'
import Container from '@material-ui/core/Container'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { session: null }
        this.handleSession = this.handleSession.bind(this)
    }

    handleSession(session) {
        this.setState({ session: session })
    }

    render() {
       
        console.log('FRom app')
        console.log(this.context)
        const getLoginButton = () => {


            return (<ThemeProvider theme={textTheme} >
                        <Button variant="contained" color="secondary" to="/login" component={Link} mr={2}>
                          Login
                        </Button>
                    </ThemeProvider>);
        }

        const getLogOutButton = () => {

            return (<ThemeProvider theme={textTheme} >
                        <Button variant="contained" color="secondary" to="/LogOut" component={Link} mr={2}>
                          LogOut
                        </Button>
                    </ThemeProvider>);
        }



        return (<div>
            <Switch>
                <AppContext.Provider value={this.state.session}>
                    <Route exact path="/login">
                        <Login handleSession={this.handleSession} />
                    </Route>

                    <Route exact path="/">
                        <Header sectionDesc="Loto Online" loginBtn={getLoginButton} />
                    </Route>
                    <PrivateRoutes>
                        <Route exact path="/Home">
                            <Nav value={0}/>
                            <Header sectionDesc="Home" logOutBtn={getLogOutButton} />
                            <HomePortrait />
                        </Route>
                        <Route exact path="/BuySorteos">
                            <Nav />
                            <Header sectionDesc="Jugadas" logOutBtn={getLogOutButton} />
                            <DrawsBoughtTable />
                        </Route>
                        <Route  exact path="/Sorteos">
                        <Header sectionDesc="Sorteos" logOutBtn={getLogOutButton} />
                            <Container fixed>
                               <DrawsTable />
                            </Container>
                            <Nav value={1}/>
                        </Route>

                        <Route exact path="/LogOut">
                            <Login handleSession={this.handleSession} />
                        </Route>
                        <Route path="*">
                            <Header sectionDesc="Sorry, page not found 404" />
                        </Route>
                    </PrivateRoutes>
                </AppContext.Provider>
            </Switch>
        </div>);
    }
}

App.contextType = AppContext


const Router = (<BrowserRouter>
    <App />
</BrowserRouter>);
ReactDOM.render(Router, root)