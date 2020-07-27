import React, { useState } from 'react';
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Forgot = ({history}) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Recuperar'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        console.log('send request') //<-- to see what we are sending
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email}
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
              toast.success(response.data.message)
                setValues({ ...values, email:'',buttonText:"Requested"})
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Try again' });
               
            });
    };

    const passwordForgotForm = () => (
        <form>

            <div className="form-group">
                <label className="text-muted">E-mail</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"  placeholder='Escribe tu E-mail para recuperar tu contraseña'/>
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
                <h1 className="p-5 text-center">Recuperación de contraseña</h1> 
               
                {passwordForgotForm()}
            </div>
        </Layout>
    );
};

export default Forgot;
