import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { read , listRelated } from './apiCore'
import Card1 from '../admin/Card1'
import Card from '../admin/Card'
import './Layout.scss'



window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})


// 1 .- we need to create the method in api core for read the product


const Product = (props) => {

    //2.- State for the product

    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const[relatedProduct, setRelatedProduct] = useState([]) //<--- state for handling the related list 

    //4 
 

    const loadSingleProduct = productId =>{
        read(productId).then( data => {
            if (data.error){
                setError(data.error)
            } else {
                setProduct(data)
                /// when we finish to fetch the product we need to fetch the related products as well
                listRelated(data._id).then(data => {
                    if(data.error){
                        setError(data.error)
                    } else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }


    // 3.- component mount

    useEffect(() => {
        const productId = props.match.params.productId // this is for take the id from the product

        loadSingleProduct(productId)

    },[props])

    return (
        <Layout>
      
                <div className="container-card-product">
                <h3 className="text-center">{product.name}</h3>
                            <div className="product-card">
                               
                            {
                                product &&
                                product.description &&
                                <Card1 product={product} showViewProductButton={false}/>
                            }
                            </div>
                            <hr/>
                <h5 className='text-center'>Productos Relacionados</h5> 
                            <div className="product-card-1">
                           
                            {relatedProduct.map((product, i)=>(
                                <div className=' mb-3'>
                                    <Card key={i} product={product}/>
                                </div>
                            ))}       
                              </div>
                </div>

            {/* {JSON.stringify(relatedProduct)} */}
        <div id='header-content' />
        </Layout>
      
    )
}
export default Product 