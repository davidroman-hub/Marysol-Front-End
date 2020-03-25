import React,{useEffect,useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Routes
import App from './App'

//Private
import Private from './core/Private'
import PrivateRoute from './auth/privateRoute'
import Admin from './core/Admin'
import AdminRoute from './auth/adminRoute'
import Dashboard from './user/userDashboard'
//Auth
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Activate from './auth/Activate'
import Forgot from './auth/Forgot'
import Reset from './auth/Reset'

const Routes = () => {



return (


        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/auth/activate/:token" component={Activate}/>
                <PrivateRoute exact path="/private" component={Private}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <AdminRoute exact path="/admin" component={Admin}/>
                <Route exact path="/auth/password/forgot" component={Forgot}/>
                <Route exact path="/auth/password/reset/:token" component={Reset}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
