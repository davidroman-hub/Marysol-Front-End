import React from 'react'
import {Link} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
// const Card = ({product}) => {

//     return (
//         <div className='col-4 mb-3'>
//         <div className='card'>
//             <div className='card-header'>{product.name}</div>
//             <div className='card-body'>
//                 <p>{product.description}</p>
//                 <p>{product.price}</p>
//                 <Link to='/'/>
//                 <button className='btn btn-outline-primary mt-2 mb-2'>
//                     View Product
//                 </button>
//                 <button className='btn btn-outline-warning mt-2 mb-2'>
//                     Add to card
//                 </button>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Card


const Card = ({product}) => {

    return (
        <div className="card1">
            <img src={photo} alt="avatar" style={{width:"100%"}} />
       
            <div className="card-container">
                <h4 className="text-center">{product.name}</h4>
                <p className="text-center">{product.description}</p>
                <p className="text-center">${product.price}</p>
                <button className="btn btn-dark ml-2 mb-2" >
                    Descripción 
                 </button>
                 <button className="btn btn-warning ml-2 mb-2">
                     Agregar a orden
                </button>
            </div>
        </div>
    )
}

export default Card