import React, {useState,useEffect} from 'react'
import Layout from './Layout'
import {getBraintreeClientToken} from './apiCore'
import Card from '../admin/Card2'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'

const Checkout = ({product}) => {

    const [data, setData] = useState({
        //loading:false,
        success:false,
        clientToken:null,
        error:'',
        instance:{},
        address:''
    })

     // if the user is Auth

    // const userId = isAuth() && isAuth().user._id
    // const token = isAuth() && isAuth().token

    const token = getCookie('token')  //// <-- right one
    const Id = getCookie('token')  //// <-- right one

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(
            data => { if (data.error){
                setData({...data, error:data.error})
                }
                else {
                    setData({clientToken:data.clientToken})
                }
            }
        )
    }

    useEffect(()=> {
        getToken(Id, token);
        
    },[])

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