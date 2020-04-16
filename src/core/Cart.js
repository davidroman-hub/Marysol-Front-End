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
                 <div className='menu-coin'>
                    <div className='row'> 
                 
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
                </div>
                
            </div>
        )
    }

    const notItemMessage = () => (
        <h4 className='text-center'>Tu carrito esta vacío. <br/> <Link to='/menu'>Continua Comprando</Link></h4>
    )

   


    return (
    <Layout >

    <div className='container-card-product'>
        <div className='text-center'>
            {item.length > 0 ? showItem(item) : notItemMessage()}
        </div>

        <div >
         <h3 className='text-center'>Tu orden</h3>
        <strong><p className="text-center"> Recibirás una llamada por parte de nuestro Team y un E-mail confirmando tu orden. </p></strong>
         <p className="text-center">Si los detalles de tus platillos como condimentos, catsup, cilantro, etc.. no estan completos seran preguntados en la llamada </p>     
         <p className="text-center">Esta sección esta diseñada para pagos a contra entrega.  </p> 
         <p className="text-center">
         <h6>PAGARAS AL RECIBIR TU PEDIDO..</h6>
         <p>En efectivo o con tarjeta tu decides!</p>
         {/* <p>Estas son los lugares donde el envío a Domicilio esta disponible: <br/>
                          -Colonia San Rafael CDMX -Colonia Juárez CDMX -CUAUHTEMOC CDMX -Anáhuac 1RA Y 2DA Sección<br/>
                          -Anzures CDMX -Sta María la Rivera CDMX -Popotla CDMX -Santo Tomás CDMX -Atlampa CDMX -Mariano Escobedo CDMX -Tlaxpana CDMX<br/>
                          -Tlatilco CDMX -Agricultura CDMX
                          </p> */}
            <p>De no ser que tu colonia no aparezca para el envio a Domicilio, no importa ya que puedes recoger tu pedido directamente en el Restaurante y puedes realizar tu pedido usando la plataforma.</p>
                         
         </p>
        {/* <Checkout product={item}/> */}
        
        <Checkout product={item} setRun={setRun} run={run}/>
        </div>
    </div>
            <div id='header-content'/>
    </Layout>
    )
}

export default Cart 