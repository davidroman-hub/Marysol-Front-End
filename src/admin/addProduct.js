import React,{useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import { createProduct } from './apiAdmin'


window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})

const AddProduct = () => {


//destructure 

const token = getCookie('token')
const user = getCookie('token')

return(

    <Layout >
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                .... product part 1
            </div>
        </div>

    </Layout>

        )
    }


    export default AddProduct 