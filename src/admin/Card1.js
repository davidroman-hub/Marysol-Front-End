import React from 'react'
import {Link} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
import ShowImage from '../ShowImage'


const Card1 = ({product}) => {

    return (
        <div className="card2">
            {/* <img src={photo} alt="avatar" style={{width:"100%"}} /> */}
            <ShowImage item={product} url='product' />
       
            <div className="card-container">
                {/* <h4 className="text-center">{product.name}</h4> */}
                <br/>
                <br/>
                <h6 className="text-center">{product.description}</h6>
                <p className="text-center">${product.price}</p>
                {/* <Link to={`/product/${product._id}`}>
                    <button className="btn btn-dark ml-2 mb-2" >
                        Descripción 
                    </button>
                 </Link> */}
                 <button className="btn btn-warning ml-2 mb-2 mr-2">
                     Agregar a orden
                </button>
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