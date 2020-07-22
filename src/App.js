import React from 'react';
import { HomeDefault } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import Login from './components/login'
import Reg from './components/register'
import ForgotPass from './components/forgotPass'
import Shortened from './components/short'
import History from './components/history'
import AuthContext from './providers/Provider'

const App = () => {
    return (
        <AuthContext>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/register" exact>
                        <Reg/>
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/forgotpass" exact>
                        <ForgotPass />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/shortened" exact>
                        <Shortened />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/history" exact>
                        <History />
                    </Route>
                </Switch>
            </Router>
        </AuthContext>
    )
}

export default App;