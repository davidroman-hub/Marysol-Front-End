
import React,{useState} from 'react'
import Layout from '../core/Layout'
import {getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import{createCategory} from './apiAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})


const AddCategory = () => { 

//State

const [name, setName] = useState('')
const [error, setError] = useState(false)
const [success, setSuccess ] = useState(false)

// destructure user and info (token) from localstorage

const token = getCookie('token')
const user = getCookie('token')
//const {_id} = isAuth()

//we need to create 2 method, for handleChange and for clickSubmit

const handleChange = (e) => {
    setError('')
    setName(e.target.value)
}

const clickSubmit = (e) => { 
    e.preventDefault()
    setError('')
    setSuccess(false)
     
    
//make request to API to create category
createCategory( user._id,token,{name})
.then( data => {
    if(data.error){
        setError(true)
    } else {
        setError('')
        setSuccess(true)
        }
    })
};

// Method for Show error and success of the new category

const showSuccess = () => { 
    if(success){
        return  <h3 className='text-success'>{name} Ha sido creado, regresa al Dashboard o crea otra categoria!</h3>
    }
}

const showError = () => { 
    if(error){
        return<h3 className='text-danger'> La categoria debe ser unica! crea otra con nombre diferente</h3>
    }
}


// button for go back

const goBack= () => (
    <div className='mt-5'>
        <Link to='/admin/dashboard' className='text-warning'>Vuelve al inicio</Link>
    </div>
)



const newCategoryForm = () => (

    <form onSubmit = {clickSubmit} id='header-content'>
        <div className='form-group'>
            <label className='text-muted'>
                Nombre de la nueva categoria:
            </label>
            <input type='text'
            className='form-control'
            onChange={handleChange}
            value={name}
            autoFocus
            required //<-- need to be something inside of the input
            />

        </div>

    <button className='btn btn-primary'>
        Crear una categoria!
    </button>


    </form>
);

return (

    <Layout >
        <div className='row'>
            <div className='col-md-8 offset-md-2' >
                <h1 className="p-5 text-center">{user.name}Listo para crear una categoria?</h1>

                {newCategoryForm()}
                {showError()}
                {showSuccess()}
                {goBack()}
            </div>
        </div>



    </Layout>

        )
}

export default AddCategory



