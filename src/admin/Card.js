import React from 'react'
import {Link} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
import ShowImage from '../ShowImage'


const Card = ({product}) => {

    return (
        <div className="card1">
            {/* <img src={photo} alt="avatar" style={{width:"100%"}} /> */}
            <ShowImage item={product} url='product' />
       
            <div className="card-container">
                <h4 className="text-center">{product.name}</h4>
                <p className="text-center">{product.description}</p>
                <p className="text-center">${product.price}</p>
                <Link to={`/product/${product._id}`}>
                    <button className="btn btn-dark ml-2 mb-2" >
                        Descripción 
                    </button>
                 </Link>
                 <button className="btn btn-warning ml-2 mb-2">
                     Agregar a orden
                </button>
            </div>
        </div>
    )
}

export default Card