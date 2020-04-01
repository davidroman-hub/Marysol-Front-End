import React, {useState,useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from '../admin/Card2'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'

const Checkout = ({product}) => {

// Method for get the total amount
    const getTotal = () => {
        return product.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        },0)
    }

    const showCheckout = () => {
        return  isAuth() ? ( <button className='btn btn-success'>Ordenar</button>
       ) : (
       <Link to='/signin'>
           <button className='btn btn-primary'>
              Inicia Sesión para Ordenar.
           </button>
       </Link>
           )}




    return (
        // <div>{JSON.stringify(product)}</div>
        <div>
        <h2> Total: ${getTotal()}</h2>
        {showCheckout()}
        </div>
    )

}

export default Checkout 