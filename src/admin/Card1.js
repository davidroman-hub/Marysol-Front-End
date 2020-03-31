import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
import ShowImage from '../ShowImage'
import {addItem} from '../core/CartHelpers'

const Card1 = ({product}) => {

    const [ redirect, setRedirect] = useState(false)

    const addToCart = () => {
        addItem(product, setRedirect(true))
    }

    const shouldRedirect = redirect => {
        if (redirect){
            return <Redirect to='/cart'/>
        }
    }


    return (
        <div className="card2">
        {/* <img src={photo} alt="avatar" style={{width:"100%"}} /> */}
        {shouldRedirect(redirect)}
        <ShowImage item={product} url='product' />
   
        <div className="card-container">
            {/* <h4 className="text-center">{product.name}</h4> */}
            <p className="text-center mt-4">{product.description}</p>
            <br/>
            <p className="text-center">${product.price}</p>
            {/* <Link to={`/product/${product._id}`}>
                <button className="btn btn-dark ml-2 mb-2" >
                    Descripción 
                </button>
             </Link> */}
             <button onClick={addToCart} className="btn btn-warning ml-2 mb-2">
                 Agregar a orden
            </button>
            <p/>
            {showStock(product.quantity)}
            
        </div>
    </div>
    )
}

const showStock = (quantity) => {
    return quantity > 0 ? <span className="'badge badge-primary badge pill mb-1 ml-2">En existencia</span>:
    <span className="badge badge-danger badge-pill">Agotado</span> 
}


export default Card1