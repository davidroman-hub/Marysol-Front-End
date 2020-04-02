import React, {useState,useEffect} from 'react'
import Layout from './Layout'
import {getBraintreeClientToken} from './apiCore'
import Card from '../admin/Card2'
import {isAuth, getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
//import DropIn from 'braintree-web-drop-in-react'
import DropIn from 'braintree-web-drop-in-react'

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


    const buy = () => {
        // send nonce to server
        // nonce = data.instance.requestMethod

        let nonce ;
        let getNonce = data.instance.requestPaymentMethod()
        .then(data => {
            console.log(data)
            nonce = data.nonce

            // once you have a nonce (card type, card number ) send nonce as 'paymentMethodNonce'
            // and also total amount
            console.log('send nonce and total amount', nonce, getTotal(product))

        })
        .catch(error => {
            console.log('dropin error:', error)
            setData({...data, error:error.message})
        })

    }




const showDropIn = () => {
    return (
        <div onBlur={ ()=> setData({...data, error:''})}>
            {data.clientToken !== null && product.length > 0 ? (
            <div>
               
                 <DropIn  options={{
                        authorization:data.clientToken,
                        
                    }} onInstance = {instance => (data.instance = instance)} />

                <button onClick={buy} className="btn btn-success mb-3">Ordenar</button>
            </div>
        ) : null}</div>
    )
}



// Method for get the total amount
    const getTotal = () => {
        return product.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        },0)
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



           const showError = error => (
            <div className='alert alert-danger' style={{display: error ? '':'none'}}>
                {error}
            </div>
        )
        


    return (
        // <div>{JSON.stringify(product)}</div>
        <div>
        <h2> Total: ${getTotal()}</h2>
        {showError(data.error)}
        {showCheckout()}
        </div>
    )

}

export default Checkout 