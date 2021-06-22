import React from 'react'
import {useContext,AllData} from  './Contex_importer'
import Nav from './Nav';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Reset from './Reset'
import Forgot from './Forgot'

function Header() {

    const [user,setUser]=useContext(AllData);

    return (
        <div>
            <Router>
                <Nav />
                
                <Switch>
                    <Route exact component={Home} path='/home' />
                    <Route exact component={Profile} path='/profile' />
                    <Route exact component={Login} path='/login' />
                    <Route exact component={Register} path='/register' />
                    <Route exact component={Reset} path='/reset' />
                    <Route exact component={Forgot} path='/forgot' />
                </Switch>
            </Router>
        </div>
    )
}

export default Header
