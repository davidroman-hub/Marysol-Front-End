import React,{ useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'
import {getCart} from './CartHelpers'
import Card3 from '../admin/Card2'
import Checkout from './Checkout'





window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})



const Cart = () => {

    const [item, setItem] = useState([])
    const [run, setRun] = useState(false); //<- for fix the infinity loop


    useEffect(() => {
        setItem(getCart())
    },[run])

    const showItem = () => {
        return(
            <div>
                <h2>Tu orden tiene {`${item.length}` } platillos</h2>
                <hr/>
                {item.map((product,i)=>(
                    <Card3 key={i} 
                    product={product} 
                    cartUpdate={true} 
                    showRemoveProductButton={true}
                    setRun={setRun}
                    run={run}
                    />
                ))}
            </div>
        )
    }

    const notItemMessage = () => (
        <h4>Tu carrito esta vacio.<br/> <Link to='/menu'>Continua Comprando</Link></h4>
    )

    return (
    <Layout >

    <div className='container-card-product'>
        <div className='product-card'>
            {item.length > 0 ? showItem(item) : notItemMessage()}
        </div>

        <div className='product-card-1'>
         <h3>Tu orden</h3>
        <Checkout product={item}/>
        </div>
    </div>
            <div id='header-content'/>
    </Layout>
    )
}

export default Cart 