import React from 'react';
import {API} from './Config'

const ShowImage2 = ({item,url}) => (
    <div className='product-img'>
        <img src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        style={{maxHeight:'50%', maxWidth:'70%'}}/>
    </div>

)

export default ShowImage2
