import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken'
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Reset = ({ match }) => { // props.match from react router doom
    const [values, setValues] = useState({
        name: '',
        token: '',
        newPassword:'',
        buttonText: 'Reset password',
     
    });


    useEffect(()=>{
        let token = match.params.token
        let {name} = jwt.decode(token)
        if(token){
            setValues({ ...values, name, token})
        }

    },[])

    const { name, token, newPassword, buttonText } = values;

    const handleChange =  event => {
        
        setValues({ ...values, newPassword: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        console.log('send request') //<-- to see what we are sending
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/reset-password`,
            data: {newPassword, resetPasswordLink: token}
        })
            .then(response => {
                console.log('RESET PASSWORD SUCCESS', response);
              toast.success(response.data.message)
                setValues({ ...values,buttonText:"Done"})
            })
            .catch(error => {
                console.log('RESET PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Try again' });
               
            });
    };

    const resetPasswordForm = () => (
        <form>

            <div className="form-group">
                <label className="text-muted"></label>
                <input onChange={handleChange} value={newPassword} type="password" className="form-control" placeholder='Type New Password' required/>
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            {/* {JSON.stringify(isAuth())} // the information of the local storage */}
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                    <h1 className="p-5 text-center">Hey {name}!!, type your New Password</h1>
                {resetPasswordForm()}
            </div>
        </Layout>
    );
};

export default Reset;
