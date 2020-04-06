
import React,{useState} from 'react'
import Layout from '../core/Layout'
import {getCookie,isAuth} from '../auth/helpers'
import {Link} from 'react-router-dom'
import{createCategory} from './apiAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ManageProducts = () => {

    const token = getCookie('token')
    const user = getCookie('token')



    return(
    <Layout>
            <h1>Manejo de productos</h1>
    </Layout>)


}

export default ManageProducts



