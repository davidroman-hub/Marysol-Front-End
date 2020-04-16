import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import {isAuth} from './helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Activate = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true ,
     
    });


    const [ redirect, setRedirect] = useState(false)
   
    const shouldRedirect = redirect => {
        if (redirect){
            return <Redirect to='/signin'/>
        }
    }


    useEffect(()=>{
        let token = match.params.token
        // decode the token
        let {name} = jwt.decode(token) //<-- decode the name from the code for use in the pager
       // console.log(token)
        if(token){
            setValues({ ...values,name:name, token })
        }

    },[])

    const { name,token, show} = values;

  

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: {token}
        })
            .then(response => {
                console.log('ACTIVATION SUCCESS', response);
                setValues({ ...values, show: false });
                toast.success(response.data.message);
                setRedirect(true);
                alert('Cuenta Activada!')
            })
            .catch(error => {
                console.log('ACTIVATION ERROR', error.response.data.error);
                toast.error(error.response.data.error);
            });
    };

   
const activationLink = () => {
 return (
     <div className="text-center">
        <h1 className="p-5">Hey {name}, List@ para activar tu cuenta?</h1>
        <button className="btn btn-outline-primary" onClick={clickSubmit}>Activar mi cuenta!</button>
    </div>
 )
}

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to='/'/> : null}
                {activationLink()}
                {shouldRedirect(redirect)}
            </div>
        </Layout>
    );
};

export default Activate;
