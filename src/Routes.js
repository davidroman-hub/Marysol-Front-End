import React,{useEffect,useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Routes


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
import AddCategory from './admin/addCategory'
import AddProduct from './admin/addProduct'
import Orders from './admin/Orders'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
//public

import Menu from './core/Shop'
import App from './App'
import Product from './core/Product'
import Cart from './core/Cart'
import MenuDes from './Menu-des'


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
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/product/:productId" component={Product}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/menu/photo" component={MenuDes}/>
                {/* /// User Routes// */}

                <PrivateRoute exact path="/user/private" component={Private}/>
                <PrivateRoute exact path="/user/dashboard" component={Dashboard}/>

                {/* //Admin Routes/// */}
                <AdminRoute exact path="/admin/update" component={Admin}/>
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                <AdminRoute exact path="/create/category" component={AddCategory}/>
                <AdminRoute exact path="/create/product" component={AddProduct}/>
                <AdminRoute exact path="/admin/orders" component={Orders}/>
                <AdminRoute exact path="/admin/products" component={ManageProducts}/>
                <AdminRoute exact path="/admin/product/update/:productId" component={UpdateProduct}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
