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
import Jump from './pages/jump'

const App = () => {
    return (
        <AuthContext>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/register" exact>
                        <Reg/>
                    </Route>
                    <Route path="/forgotpass" exact>
                        <ForgotPass />
                    </Route>
                    <Route path="/shortened" exact>
                        <Shortened />
                    </Route>
                    <Route path="/history" exact>
                        <History />
                    </Route>
                    <Route path="*">
                        <Jump />
                    </Route>
                </Switch>
            </Router>
        </AuthContext>
    )
}

export default App;