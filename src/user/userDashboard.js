import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Layout from '../core/Layout'
import {isAuth, getCookie, signout} from '../auth/helpers'
import axios from 'axios';
import {getPurchaseHistory } from './apiUser'


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
                    hola!{name}
                </li>
                <li className='list-group-item'>
                    E-mail:{email}
                </li>
                <li className='list-group-item'>
                  Telefono:{phone}
                </li>
            </ul>
        </div>

        <div className='card mb-5'>
            <li className='list-group-item'>
                <Link to='/user/private'>Actualizar mi información</Link>
            </li>
        </div>

      
        <div className='card mb-5'>
              <h3 className='card-header'>Historial de mis Compras</h3> 
              <ul className='list-group'>
                <li className='list-group-item'>
                {purchase(historyP)}
                </li>
             </ul>
        </div>
    </Layout>
   
    )
}

export default Dashboard