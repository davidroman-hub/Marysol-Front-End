
import React, {useEffect,useState} from 'react';
import Layout from './Layout'
import { getCategories, getFilteredProducts} from './apiCore'

import Card from '../admin/Card'
import Checkbox from './Checkbox'
import RadioBox from './RadioBox'
import {prices} from './FixedPrices'

window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = false})



const Menu = () => {
 
  const [categories, setCategories] = useState([])
  const [error, setError] =useState(false)
  const [size, setSize] = useState(0) //<--- for load more products

  /// state for fetch products
 
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0) 
  const [filteredResults, setFilteredResults] = useState([])

  const loadFilteredResults = (newFilters) => { 
    // console.log(newFilters)
    getFilteredProducts(skip, limit, newFilters).then( data => {
     if(data.error){
         setError(data.error)
     } else {
         setFilteredResults(data.data)
         setSize(data.size)
         setSkip(0)
        }
    })
 };

 //////////////////////////////////////////////////////////////

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
  init();
  loadFilteredResults(skip,limit, myFilters.filters)
},[])

//// load more button////

const loadMore = () => {
  let toSkip = skip + limit//// remeber the skip is 0 but we gonna show 6 more

  getFilteredProducts(toSkip, limit, myFilters.filters).then(
  data => {
    if (data.error){
      setError(data.error)
    } else {
      setFilteredResults([...filteredResults,...data.data]);
      setSize(data.size)
      setSkip(toSkip)
      }
    }
  )
}

const loadMoreButton = () => {
  return(
    size > 0 && size >= limit && (
      <button onClick={loadMore}
      className="btn btn-warning mb-5 ml-5">Ver Más</button>
    )
  )
}


////////////////////////


const handlePrice = value => {
  const data = prices;
  let array = [];
  for (let key in data) {
    if (data[key]._id === parseInt(value)){
      array = data[key].array
    }
  }
  return array
}


const handleFilters = (filters, filterBy) => {
  console.log('shop', filters, filterBy)
  const newFilters = {...myFilters}
  newFilters.filters[filterBy] = filters;
  
  // filter for the price method
  if(filterBy === 'price'){
    let priceValue = handlePrice(filters)
    newFilters.filters[filterBy] = priceValue;
    setMyFilters(newFilters);
  }

  // we gona fetch the filtered products

  loadFilteredResults(myFilters.filters)

  setMyFilters(newFilters)
}


// const loadFilteredResults = (newFilters) => {
//   console.log(newFilters)
// }

  return (
        <Layout>
          {/* <div className='row'>
          {JSON.stringify(categories)}
          </div> */}
          <div className="shop-container">
          <h1 className="mb-4 text-center">Nuestro Menú</h1>
                        <div className="text-center">
                          <p>Bienvenidos a nuestra Sección de Ordenes!</p>
                          <p>Aquí podras seleccionar los platillos de tu agrado y la cantidad de los mismos.<br/>
                          Al final de tu orden tendras que ir a tu carrito
                          </p>
                          <strong><p>OJO! Los pagos son a contra entrega! <br/>
                          Las ordenes de los pedidos tendran 2 opciones: La primera recogerla en el Restaurante ó <br/>
                          Envío a Domicilio. 
                          </p></strong>
                          <p>Estas son los lugares donde el envío a Domicilio esta disponible: <br/>
                          -Colonia San Rafael CDMX -Colonia Juárez CDMX -CUAUHTEMOC CDMX -Anáhuac 1RA Y 2DA Sección<br/>
                          -Anzures CDMX -Sta María la Rivera CDMX -Popotla CDMX -Santo Tomás CDMX -Atlampa CDMX -Mariano Escobedo CDMX -Tlaxpana CDMX<br/>
                          -Tlatilco CDMX -Agricultura CDMX
                          </p>
                          <p>De no ser que tu colonia no aparezca, no importa ya que puedes recoger tu pedido directamente en el Restaurante y puedes realizar tu pedido usando la plataforma.</p>
                        </div>
                        <div className="About-shop-container">
                            <div className="about-us">
                            <h4>Filtrar Por Categorías</h4>
                            <Checkbox categories={categories}
                                  handleFilters={ filters => 
                                    handleFilters(filters,'category')}
                                  />
                            </div>
                            <hr/>
                       
                            <div className="shop-us-des">
                            <h4>Filtrar por Precios</h4> 
                                          <RadioBox 
                                 className='box'         
                                prices={prices}
                                handleFilters={filters=> 
                                  handleFilters(filters,'price')}
                                /> 
                              </div>
                        </div>



         
                <hr/>
              <div className="menu-coin">
                
                  <div className="row">
                  {filteredResults.map((product,i)=>(
                     <div key={i} >
                          <Card  product={product}/>
                      </div>                 
                 ))}
                  </div>
                  <hr/>
                  {loadMoreButton()}
                </div>
                </div>
                  {/* {JSON.stringify(myFilters)} */}
                  {/* {JSON.stringify(filteredResults)} */}
     
           
          
          <div id='header-content' />
        </Layout>
    )}

export default Menu 