import React,{ useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'
import {getCart} from './CartHelpers'
import {createOrder} from '../core/apiCore'
import Card3 from '../admin/Card2'
//import Checkout from './Checkout'
import Checkout from './Checkoutcopy'




window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = false})

const Cart = () => {

    const [item, setItem] = useState([])
    const [run, setRun] = useState(false); //<- for fix the infinity loop


    useEffect(() => {
        setItem(getCart())
    },[run])

    const showItem = item => {
        return(
            <div>
                <h2>Tu orden tiene {`${item.length}` } platillos</h2>
                <hr/>
                {item.map((product,i)=>(
                    <Card3 
                    key={i} 
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
        <h4>Tu carrito esta vacío.<br/> <Link to='/menu'>Continua Comprando</Link></h4>
    )

   


    return (
    <Layout >

    <div className='container-card-product'>
        <div className='product-card'>
            {item.length > 0 ? showItem(item) : notItemMessage()}
        </div>

        <div >
         <h3 className='text-center'>Tu orden</h3>
         <p className="text-center">Esta sección esta diseñada para pagos a contra entrega. </p> 
         <p className="text-center">Lo que significa que pagaras en efectivo o con tu tarjeta a la hora de recibir tu pedido,</p>
        <strong><p className="text-center"> Recibirás una llamada por parte de nuestro Team y un E-mail confirmando tu orden. </p></strong>
         <p className="text-center">Los detalles de tus platillos como condimentos, catsup, cilantro, etc.. seran preguntados en la llamada </p>     
         <h3 className='text-center'>Recuerda Actualizar tu información!</h3>   
         <h5 className="text-center">Si no lo has hecho <Link to='user/private'>Actualiza aquí</Link></h5>
        <p className="text-center">Si ya actualizaste no hagas nada y solo da Click en Ordenar! Gracias por tu preferencia</p>
        {/* <Checkout product={item}/> */}
        
        <Checkout product={item} setRun={setRun} run={run}/>
        </div>
    </div>
            <div id='header-content'/>
    </Layout>
    )
}

export default Cart 