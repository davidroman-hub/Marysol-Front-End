import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Layout from '../core/Layout'
import {isAuth, getCookie, signout} from '../auth/helpers'
import axios from 'axios';
import {getPurchaseHistory } from './apiUser'
import moment from 'moment'

window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})


const Dashboard = ({history}) =>{


    // state for the user purchase 
    const [historyP, setHistory] = useState([])

    const token = getCookie('token') //<-- we need this for send the token and populate
    const Id = getCookie('token')


    const [values, setValues] = useState({
        role:'',
        name: '',
        email: '',
        phone:'',
        password: '',
        buttonText: 'Update'
    });

    /// method for show the history purchased

    const loadinit  = (Id,token) => {
        getPurchaseHistory(Id,token).then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                setHistory(data)
            }
        })
    }

useEffect(()=>{
    loadinit(Id,token)
    loadProfile();
  
},[])


const purchase = (historyP) => {
    return(
        <div className>
            {JSON.stringify(historyP)}
        </div>
    )
}


const purchaseInfo = (historyP) => {
    return(
        <div className='card mb-5'  >
        <ul className='list-group'>
          <li className='list-group-item'>
             {/* {JSON.stringify(history)} */}
             {historyP.map((h, i) => {
                        return (
                            <div>             
                                <hr />
                                <div style={{borderBottom:"5px solid green"}} />
                                <h2 className='mt-2' >Total de la orden $: {h.amount}</h2>
                                <h3 style={{color:'red'}}>ID orden:{h._id}</h3>
                                <h4 style={{color: 'orange'}}>Estatus de la orden:{h.status}</h4>
                                <h6>Ordenado por: {h.client_name}</h6>
                                <h6>Telefono de contacto: {h.client_phone}</h6>
                                <h6>Dirección de envio: {h.client_address}</h6>
                                <h6>
                                     Comprado el dia:{" "}
                                    {h.createdAt}                                                    
                                </h6>

                                <br/>
                                <h2>Productos en la orden:{h.products.length}</h2>
                                {h.products.map((p, i) => {
                                    return (
                                        <div key={i}>
                                            <br/>
                                            <h6>Nombre del Producto: {p.name}</h6>
                                            <h6>Cantidad del Producto: {p.count}</h6>
                                            <h6>Precio: ${p.price}</h6>
                                            <br/>                             
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}     
          </li>
       </ul>
  </div>
    )
}






const loadProfile = () => {
    axios({
        method: 'GET',
        url:`${process.env.REACT_APP_API}/user/${isAuth()._id}`,
        headers: {
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        console.log('profile ', response) //<-- populate state
        const {role, name , phone, email} = response.data
        setValues({...values, role, name, phone ,email})
    })
    .catch(error => {
        console.log('Profile error', error.response.data.error)
        if(error.response.status == 401){
            signout(() => {
                history.push('/'); //<-- for signout automatically
            })
        } 
    })
}



    const { role, name, phone ,email} = values;

    return (
        <Layout title='Dashboard' description=' User Dashboard' className='container' >
        <div className=' card mb-5' id="header-content">
            <h3 className='card-header'>Información del Usuario</h3>
            <ul className='list-group'>
                <li className='list-group-item'>
                    hola! {name}
                </li>
                <li className='list-group-item'>
                    E-mail: {email}
                </li>
                {/* <li className='list-group-item'>
                  Telefono:{phone}
                </li> */}
            </ul>
        </div>
            
        <div className='card mb-5'>
            <h4 className='text-center'>Antes de Ordenar es importante actualizar tu información!!</h4>
            <br/>
            <h5 className='text-center'>Necesitamos tu dirección de envío y tu telefono para poder contactarte!</h5>
            <li className='list-group-item'>
                <Link to='/user/private' >Actualizar mi información</Link>
            </li>
        </div>

      
        {/* <div className='card mb-5'>
              <h3 className='card-header'>Historial de mis Compras</h3> 
              {purchaseInfo(historyP)}
        </div> */}
    </Layout>
   
    )
}

export default Dashboard