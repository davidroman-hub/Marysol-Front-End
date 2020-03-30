
import React, {useEffect,useState} from 'react';
import Layout from './Layout'
import { getCategories} from './apiCore'

import Card from '../admin/Card'
import Checkbox from './Checkbox'

const Menu = () => {
 
  const [categories, setCategories] = useState([])
  const [error, setError] =useState(false)
  const [myFilters, setMyFilters] = useState({
    filters:{ category:[], price:[] }
  })


  const init = () => {
    getCategories().then( data => {
        if (data.error){
            setError(data.error)
        }else{
            setCategories(data)
        }
    }) 
}

useEffect(()=>{
  init()
},[])


const handleFilters = (filters, filterBy) => {
  console.log('shop', filters, filterBy)
  const newFilters = {...myFilters}
  newFilters.filters[filterBy] = filters
  setMyFilters(newFilters)
}


  return (
        <Layout title="Shop Page" description="Search and find books of your choice" 
            className='container-fluid'>
          {/* <div className='row'>
          {JSON.stringify(categories)}
          </div> */}
          <div className='shop-container ml-3'>
              <div className='CategorisF'>
                <h4>Filtrar Por Categorias</h4>
                <Checkbox categories={categories}
                handleFilters={ filters => 
                  handleFilters(filters,'category')}
                />
              </div>
                 <hr/>
              <div>
             {JSON.stringify(myFilters)}
              </div>
          </div>
          

        </Layout>
    )
}


export default Menu 