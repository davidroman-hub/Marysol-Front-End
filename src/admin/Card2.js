import React,{useState, useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom'
import photo from './img_avatar.png'
import './Card.scss'
import ShowImage from '../ShowImage'
import {addItem, updateItem} from '../core/CartHelpers'

const Card3 = ({product, 
                cartUpdate = false,
                setRun = f => f,// default value of funtion 3.- as props
                run = undefined // default value of undefined 4.- as props
            }) => {

    const [ redirect, setRedirect] = useState(false)
    const [ count, setCount] = useState(product.count)//, state for increment or dicrement quantity



    const shouldRedirect = redirect => {
        if (redirect){
            return <Redirect to='/cart'/>
        }
    }

    // handleChange fot change the quantyty of the products
//we need to create another method in card helpers called update and use at the final

const handleChange = productId => event => {
    setRun(!run)
    setCount (event.target.value < 1 ? 1 : event.target.value )
    if(event.target.value >= 1) {
        updateItem(productId, event.target.value);
    }
}

// method for show if we want to add more quantity for the same product 


    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate && (
        <div> 
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                    <span className='input-group-text ml-2'>
                        Cantidad (Máx 10)
                    </span>
                    {/* we need to know who it will be the product to we need to incr/dicr thats whywe use Id*/}
                </div>
                {/* <select onChange={handleChange(product._id)}>
                    <option value={count}>1</option>
                    <option value={count}>2</option> 
                    <option value={count}>3</option> 
                </select> */}
    
                 <input type="number"
                 className="ml-2"
                  max='10'
                  value={count} 
                  onChange={handleChange(product._id)} />
            </div>
        </div>
        )
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
                {showCartUpdateOptions(cartUpdate)}
                {showStock(product.quantity)}        
            </div>
        </div>
    )
}

const showStock = (quantity) => {
    return quantity > 0 ? <span className="'badge badge-primary badge pill mb-1 ml-2">En existencia</span>:
    <span className="badge badge-danger badge-pill">Agotado</span> 
}



export default Card3