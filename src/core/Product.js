import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { read } from './apiCore'
import Card1 from '../admin/Card1'

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
        <Layout>
      

    <h2 className='mb-4 text-center'>{product.name}</h2>
        {/* <h2 className='mb-4'>Single Product</h2> */}
        
        <div className='row'>
            {/* {JSON.stringify(product)} */}
            {/* {JSON.stringify(product)} */}
            {
                product &&
                product.description &&
                <Card1 product={product} showViewProductButton={false}/>
            }
        </div>

        </Layout>
      
    )
}
export default Product 