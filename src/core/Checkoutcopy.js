import React, {useState,useEffect} from 'react'
import Layout from './Layout'
import './Layout.scss'
import {Link,Redirect} from 'react-router-dom'
import Card from '../admin/Card2'
import {isAuth, getCookie} from '../auth/helpers'
import {createOrder} from '../core/apiCore'
import {emptyCart} from './CartHelpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Checkout = ({product, setRun = f => f, run = undefined, match}) => {


    
    const [ redirect, setRedirect] = useState(false)
   
    const shouldRedirect = redirect => {
        if (redirect){
            return <Redirect to='/user/dashboard'/>
        }
    }
 
    const [data, setData] = useState({
        //loading:false,
        success:false,
        clientToken:null,
        error:'',
        instance:{},
        address:'',
        amount:'',
        name:'',
        number:'',
        error:''
    })

     // if the user is Auth

    
    const token = getCookie('token')  //// <-- right one
    const Id = getCookie('token')  //// <-- right one
    


    ///// handle the addresss /////

    let deliveryAddress = data.address
  
    const handleAddress =  event => {
        setData({...data, address:event.target.value})  
    }

    /// handle name ///

    let names = data.name
  
    const handleName =  event => {
        setData({...data, name:event.target.value})  
    }

//// handle the number ////

let numbers = data.number
  
    const handleNumber =  event => {
        setData({...data, number:event.target.value})  
    }

    
    const orderForm = () => {
            return(
     <form  onSubmit={buy} >
         <ul>
            
        <div className="mb-2">
        
            {/* <li className="nav-item">
                <div className="form-group">    
                <label className='text-muted'>Telefono: </label>
                    <input type="number"
                    onChange={handleNumber}
                    className='form-control'
                    value={data.number}
                    required/>
                </div>
            </li>

            <li className="nav-item">
                <div className='form-group'>
                <input type="text"
                    onChange={handleName}
                    className='form-control'
                    value={data.name}
                    placeholder='Nombre de quien hace la orden:' required/>
                </div>
            </li>
            <li className="nav-item">
            <div className="form-group">
            <textarea
                onChange={handleAddress}
                className='form-control'
                value={data.address}
                placeholder='Escribe tu direccion de envio aqui C.P, calle, Ref, etc..' required/>
            </div>
            </li> */}
            <li className="nav-item">
                <button className="btn btn-success btn-block mr-b2" >Ordenar</button>
            </li>   
        </div>
        
        </ul>
     </form>    
        )
    }


 // Method for get the total amount
    const getTotal = () => {
        return product.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        },0)
    }



const buy = (event) => {
        event.preventDefault()
    console.log(product)    
    
    
    const createOrderData ={ 
        products:product,
        number:numbers,
        name:names,
        client_email:isAuth().email,
        client_name:isAuth().name,
        client_address:isAuth().address,
        client_address2:isAuth().address2,
        client_phone:isAuth().phone,
        client_id:isAuth()._id,
        amount:getTotal(product),
        address:deliveryAddress

    }
  

//     createOrder(Id,token,createOrderData)
//     .then(response =>{
//         emptyCart(() => {
//             setRun(!run);
//             setRedirect(true);
//              toast.success(`La orden ha sido creada!`);
//             console.log('order created and empty Cart');
//             setData({
//                 loading:false,
//                 success:true
//             })
//         })
//     })
//     .catch(error => {
//         console.log(error)
//         setData({...data, error: error.message})
//     })
// }

createOrder(Id,token,createOrderData)
.then(response =>{ 
    if (response.error){
        setData({...data, error: response.error})
        
    }else{
    emptyCart(() => {
        setRun(!run);
        setRedirect(true);
         toast.success(`La orden ha sido creada!`);
        console.log('order created and empty Cart');
        setData({
            loading:false,
            success:true
        })
   })
}})
.catch(error => {
    console.log(error)
    setData({...data, error: error.message})
})
}


// createOrder(Id,token,createOrderData)
// .then(response =>{ 
//     if (response.error){
//         setData({...data, error: response.error})
//     }else{
//     emptyCart(() => {
//         setRun(!run);
//         setRedirect(true);
//          toast.success(`La orden ha sido creada!`);
//         console.log('order created and empty Cart');
//         setData({
//             loading:false,
//             success:true
//         })
//    })
// }})
// .catch(error => {
//     console.log(error)
//     setData({...data, error: error.message})
// })
// }




const showDropIn = () => {
    return (
        <div onBlur={ ()=> setData({...data, error:''})}>
            {token !== null && product.length > 0 ? (
            <div>
                {orderForm()}
                {/* {name()}
                {address()} */}     
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
                    Gracias por tu solicitud!   en breve recibiras un E-mail. Ve a tu perfil para ver la orden
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
        <ToastContainer/>
        {/* {shouldRedirect(redirect)} */}
        {showError(data.error)}
        {showSuccess(data.success)} 
        {showCheckout()}
        </div>
    )

}

export default Checkout 