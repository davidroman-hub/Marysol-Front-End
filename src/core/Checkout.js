import React, {useState,useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from '../admin/Card2'

const Checkout = ({product}) => {

// Method for get the total amount
    const getTotal = () => {
        return product.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        },0)
    }



    return (
        // <div>{JSON.stringify(product)}</div>
        <h2> Total: ${getTotal()}</h2>
    )

}

export default Checkout 