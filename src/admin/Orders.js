
import React,{useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import { listOrders, getStatusValues,updateOrderStatus} from './apiAdmin'
import moment from 'moment'

window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})
  
  


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

const showOrdersLength = () => {
   if(orders.length > 0 ){
       return (
        <h2 className="p-5 text-center text-danger "> Total de ordenes:{orders.length}</h2>
       )
   } else {
       return <h1 className="text-danger">No Hay ordenes</h1>
   }
}


const showOrdersDisplay = () => {
        
    return(

        <div className='row'>
        <div className='col-md-8 offset-md-2'>
        <div className='col-md-8 offset-md-2'>
          
            {/* {JSON.stringify(orders)}   */}
            {orders.map((o,oIndex) => {
              return (
                  <div  className='mt-5' key={oIndex} style={{borderBottom:"5px solid indigo"}}>
                        <h6 className='bg-primary'>ID de la orden:{o._id}</h6>
                        <ul className='list-group mb-2'>
                            <li className='list-group-item'>{o.status}</li>
                            <li className='list-group-item'>Total de la orden: ${o.amount}</li>
                            {/* <li className='list-group-item'>{o.transaction_id}</li> */}
                            <li className='list-group-item'>ordenado por :{o.name}</li>
                            <li className='list-group-item'>Creado el: {o.createdAt}</li>
                            <li className='list-group-item'>Dirección: {o.address}</li>
                            <li className='list-group-item'>Telefono:{o.number} </li>
                            <h3 className='mt-4 mb-4 font-italic'>
                                Total de productos en la orden:{o.products.length}
                            </h3>

                            {o.products.map((p, pIndex) => (
                                <div className='mb-4' key={pIndex} style={{padding:'20px', border:'1px solid indigo'}}
                                
                                >
                                    {showInput('Nombre del product:', p.name)} 
                                    {showInput('Precio del producto $:', p.price)}  
                                    {showInput('Cantidad pedida del producto:', p.count)}  
                                    {showInput('Nombre del producto:', p._id)}   

                                </div>
                            ))}


                        </ul>
                  </div>
              )
          })}
            </div>
        </div>
    </div>
    
    )
}


const showInput = (key, value) => {
    return (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input type="text" value={value} className="form-control" readOnly/>
        </div>
    )
}
 
    return (
      <Layout>
          <div className="row">
            <div className="col-md-8 offset-md-2">
          {showOrdersLength()}
          {showOrdersDisplay()}
          {/* {JSON.stringify(orders)} */}
            </div>
          </div>
          <div id="header-content"/>
      </Layout>
    )

   
}
export default Orders