
import React,{useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import { listOrders, getStatusValues,updateOrderStatus} from './apiAdmin'
//import moment from 'moment'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const token = getCookie('token')  //// <-- right one
    const Id = getCookie('token')  //// <-- right one


    const loadOders = () => {

        listOrders(Id, token).then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setOrders(data)
            }
        })
    }


    useEffect(()=>{
        loadOders()
    },[])

const noOrders = orders => {
    return orders.length < 1 ? <h4> No hay ordenes</h4> : null;
}
 
    return (
      <Layout>
          {noOrders(orders)}
          {JSON.stringify(orders)}
      </Layout>
    )

   
}
export default Orders