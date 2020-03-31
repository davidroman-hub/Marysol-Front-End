import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { read } from './apiCore'
import Card from '../admin/Card'

window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})


// 1 .- we need to create the method in api core for read the product


const Product = (props) => {

    //2.- State for the product

    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)


    //4 

    const loadSingleProduct = productId =>{
        read(productId).then( data => {
            if (data.error){
                setError(data.error)
            } else {
                setProduct(data)
            }
        })
    }


    // 3.- component mount

    useEffect(() => {
        const productId = props.match.params.productId // this is for take the id from the product

        loadSingleProduct(productId)

    },[])

    return (
        <Layout title='Product' 
        description='product view'
        className='container-fluid'
        >

        <h2 className='mb-4'>Single Product</h2>
        <div className='row'>
            {JSON.stringify(product)}
        </div>
        <div id='header-content'/>
        </Layout>
    )
}
export default Product 