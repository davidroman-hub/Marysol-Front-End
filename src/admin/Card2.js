import React,{useState, useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
import ShowImage from '../ShowImage'
//import {addItem} from '../core/CartHelpers'

const Card3 = ({product, cartUpdate = false}) => {

    const [ redirect, setRedirect] = useState(false)


    const shouldRedirect = redirect => {
        if (redirect){
            return <Redirect to='/cart'/>
        }
    }

    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate && <div> Increment/ dicrement </div>
    }





    return (
        <div className="card3">
            {/* <img src={photo} alt="avatar" style={{width:"100%"}} /> */}
            {shouldRedirect(redirect)}
            <ShowImage item={product} url='product' />
       
            <div className="card-container">
                <h4 className="text-center">{product.name}</h4>
                {/* <p className="text-center">{product.description}</p> */}
                <br/>
                <p className="text-center">${product.price}</p>
                <Link to={`/product/${product._id}`}>
                    <button className="btn btn-dark ml-2 mb-2" >
                        Descripción 
                    </button>
                 </Link>
                 {/* <button onClick={addToCart} className="btn btn-warning ml-2 mb-2">
                     Agregar a orden
                </button> */}
                <p/>
                {showStock(product.quantity)}
                {showCartUpdateOptions(cartUpdate)}
                
            </div>
        </div>
    )
}

const showStock = (quantity) => {
    return quantity > 0 ? <span className="'badge badge-primary badge pill mb-1 ml-2">En existencia</span>:
    <span className="badge badge-danger badge-pill">Agotado</span> 
}



export default Card3