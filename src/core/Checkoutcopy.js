import React, {useState,useEffect} from 'react'
import Layout from './Layout'

import Card from '../admin/Card2'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import {createOrder} from '../core/apiCore'

const Checkout = ({product}) => {

    const [data, setData] = useState({
        //loading:false,
        success:false,
        clientToken:null,
        error:'',
        instance:{},
        address:'',
        amount:''
    })

     // if the user is Auth

    // const userId = isAuth() && isAuth().user._id
    // const token = isAuth() && isAuth().token

    const token = getCookie('token')  //// <-- right one
    const Id = getCookie('token')  //// <-- right one
    

    ///// handle the addresss /////

    let deliveryAddress = data.address
  
    const handleAddress =  event => {
        setData({...data, address:event.target.value})  
    }


    const address = () => {
            return(
            <div className="mb-2">
                <label className='text-muted'>
                    Direccion de Envio
                </label>
            <textarea
            onChange={handleAddress}
            className='form-control'
            value={data.address}
            placeholder='Escribe tu direccion de envio aqui C.P, calle, Ref, etc..' required/>
            </div>
        )
    }



 // Method for get the total amount
    const getTotal = () => {
        return product.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        },0)
    }



const buy = () => {
        
    console.log(product)    
    const createOrderData ={ 
        products:product,
        transaction_id:null,
        amount:getTotal(product) ,
        address:deliveryAddress
    }


    createOrder(Id,token,createOrderData)
    .then(response =>{
        console.log('order created')
        setData({
            loading:false,
            success:true
        })
    })
    .catch(error => {
        console.log(error)
        setData({...data, error: error.message})
    })
}




const showDropIn = () => {
    return (
        <div onBlur={ ()=> setData({...data, error:''})}>
            {token !== null && product.length > 0 ? (
            <div>
               
              
                {address()}
                <button onClick={buy} className="btn btn-success btn-block mr-b2">Ordenar</button>
            </div> 
        ) : null}</div>
    )
}




    const showCheckout = () => {
     return  isAuth() ? ( <div >{showDropIn()}</div>
       ) : (
       <Link to='/signin'>
           <button className='btn btn-primary'>
              Inicia Sesión para Ordenar.
           </button>
       </Link>
           )}


const showError = error => {
            return (
            <div className="alert alert-danger" style={{display:error ? '' : 'none'}}>{error}</div>
            )
        }
       
const showSuccess = success => {
            return (
                <div className="alert alert-info" style={{display:success ? '':'none'}}>
                    Gracias por tu solicitud!  en breve recibiras un E-mail. Ve a tu perfil para ver la orden
                </div>
            )
        }
       
 const showLoading = (loading) => (
            loading && (
                <h3>Cargando...</h3>
            )
        )
    
  
        


    return (
        // <div>{JSON.stringify(product)}</div>
        <div>
        <h2> Total: ${getTotal()}</h2>
        {showSuccess(data.success)} 
        {showCheckout()}
        </div>
    )

}

export default Checkout 