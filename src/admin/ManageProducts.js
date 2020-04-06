
import React,{useState, useEffect} from 'react'
import Layout from '../core/Layout'
import {getCookie,isAuth} from '../auth/helpers'
import {Link} from 'react-router-dom'
import{getProductss, deleteProduct} from './apiAdmin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})


const ManageProducts = () => {

    const [products, getProducts] = useState([])

    const loadProducts = () => {
        getProductss().then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                getProducts(data)
            }
        })
    }

    const destroy = productId => {
        deleteProduct(productId,Id, token).then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                loadProducts()
            }
        }) 
    }


    useEffect(() => {
        loadProducts()
    },[])




    const token = getCookie('token')
    const Id = getCookie('token')



    return(
    <Layout>
        <div className="row">
            <div className="col-12">
            <h1>Manejo de productos</h1>
            <ul className='list-group'>
                {products.map((p,i) => (
                    <li key={i} className='list-group-item d-flex justify-content-between align-items-center'>
                       <strong>{p.name}</strong>
                        <Link to={`admin/product/update/${p.id}`} >
                            <span className='badge badge-warning badge-pill'>Actualizar</span>
                        </Link>
                        <span onClick={()=> destroy(p._id)} className='badge badge-danger badge-pill'>Eliminar</span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        <div id="header-content"/>
    </Layout>)


}

export default ManageProducts



