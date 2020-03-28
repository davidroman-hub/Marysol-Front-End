import React,{useEffect,useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Routes
import App from './App'

//Private
import Private from './core/Private'
import PrivateRoute from './auth/privateRoute'
import Dashboard from './user/userDashboard'
//Auth
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Activate from './auth/Activate'
import Forgot from './auth/Forgot'
import Reset from './auth/Reset'

// admin routes 
import Admin from './core/Admin'
import AdminRoute from './auth/adminRoute'
import AdminDashboard from './admin/adminDashboard'




const Routes = () => {



return (
        <BrowserRouter>
            <Switch>
                {/* // Public Routes // */}

                <Route exact path="/" component={App}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/auth/password/forgot" component={Forgot}/>
                <Route exact path="/auth/password/reset/:token" component={Reset}/>
                <Route exact path="/auth/activate/:token" component={Activate}/>
                {/* /// User Routes// */}

                <PrivateRoute exact path="/user/private" component={Private}/>
                <PrivateRoute exact path="/user/dashboard" component={Dashboard}/>

                {/* //Admin Routes/// */}
                <AdminRoute exact path="/admin/update" component={Admin}/>
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
