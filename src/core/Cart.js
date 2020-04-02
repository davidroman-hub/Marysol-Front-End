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

        <div >
         <h3 className='text-center'>Tu orden</h3>
         <p className="text-center">Esta sección esta diseñada para pagos a contra entrega. </p> 
         <p className="text-center">Lo que significa que pagaras en efectivo o con tu tarjeta a la hora de recibir tu pedido , sin embargo es necesario poner datos para generar la orden.</p>
         <p class="text-center">Lo único que debes hacer es poner los siguientes datos en el area de tarjetas para generar la orden:</p>
         <p class="text-center"> Copia y coloca la siguiente info en el area de pago: Num. tarjeta : 4111111111111111 exp:02/24 CVV:123 y dar click en Ordenar! </p>
         <p class="text-center"> Recibiras una llamada por parte de nuestro Team confirmando tu orden y un E-mail de confirmación! </p>
         <p class="text-center">Los detalles de tus platillos como condimentos, catsup, cilantro, etc.. seran preguntados en la llamada </p>        
        <Checkout product={item}/>
        </div>
    </div>
            <div id='header-content'/>
    </Layout>
    )
}

export default Cart 