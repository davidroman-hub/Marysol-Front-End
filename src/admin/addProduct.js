import React,{useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {getCookie} from '../auth/helpers'
import {Link} from 'react-router-dom'
import { createProduct } from './apiAdmin'


window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})

const AddProduct = () => {


//destructure 

const token = getCookie('token')
const user = getCookie('token')



const [values, setValues] = useState({//<-- have to be an object because we gonna send props

    name:'',
    description:'',
    price:'',
    categories:[], //<-- we gonna put the categories from the backend
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    error:'',
    createdProduct:'',
    redirectToProfile:false,
    formData:''
})


// destructure of the same state:

const {

    name,
    description,
    price,
    categories, //<-- we gonna put the categories from the backend
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData // <--  we gonna send this to the backend

} = values;

useEffect(() => { 
    setValues({...values, formData: new FormData()}); //<-- thats why we used here
}, [])


const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0]: event.target.value;
    formData.set(name, value);//<-- first we gonna take the fisrt value 'name' and after we gonna take the other values
    setValues({...values, [name]: value})
}

const clickSubmit= (event) => { 
    //
}



const newPostForm = () => {

    return(


    <form className='product-form' onSubmit={clickSubmit} id='header-content'>
        <h4>Agrega una foto</h4>
        <div className='container'>
            <label className='btn btn-secondary'>
                <input
                    onChange={handleChange('photo')}
                    type='file'
                    name='photo'
                    accept='image/*'
                />
            </label>
        </div>

                <form className='mb-3' onSubmit={clickSubmit}>
                    <div className='form-group'>
                        <label className='text-muted'> </label>
                            <input 
                                placeholder='Nombre del producto'
                                onChange={handleChange('name')} 
                                type='text' 
                                className='form-control' 
                                value={name} 
                            />
                    </div>




                    <div className='form-group'>
                    <label className='text-muted'></label>
                        <textarea 
                            placeholder='descripcion del producto'
                            onChange={handleChange('description')}  
                            className='form-control' 
                            value={description} />
                    </div>

                     <div className='form-group'>
                        <label className='text-muted'> Precio </label>
                            <input 
                                onChange={handleChange('price')} 
                                type='number' 
                                className='form-control' 
                                value={price} />
                        </div>

                    <div className='form-group'>
                        <label className='text-muted'> Categoria </label>
                            <select 
                                onChange={handleChange('category')} 
                                className='form-control' 
                                >
                                <option value='5e7a295b6190951da4c955f2'>Cockteles</option>   
                            </select>
                    </div>


                    <div className='form-group'>
                        <label className='text-muted'>envio</label>
                            <select 
                                onChange={handleChange('shipping')} 
                                className='form-control' 
                                >
                                <option value='0'>No</option>
                                <option value='1'>Si</option>      
                            </select>
                    </div>


                    <div className='form-group'>
                        <label className='text-muted'>Cantidad?</label>
                            <input 
                                onChange={handleChange('quantity')} 
                                type='number' 
                                className='form-control' 
                                value={quantity} 
                            />
                    </div>
                    
                    <button > Create Product </button>
                    </form>
            </form>
           )
     }






return(

    <Layout >
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                {newPostForm()}
            </div>
        </div>

    </Layout>

        )
    }


    export default AddProduct 