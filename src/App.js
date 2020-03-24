import React,{Fragment} from 'react';
import Layout from './core/Layout'
import {Link} from 'react-router-dom'

// Photos

import slider1 from './slider3.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'


//styles
import './App.scss'

const CarouselMyS = () => (
<main id='main1'>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className='carousel-inner'>
            <div className='carousel-item active'>
            <img className='tres' src={slider1} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Almejas Vivas</h5>
                     <p id="resultados">Solo para paladares exigentes</p>
                </div>
            </div>
            <div className='carousel-item '>
             <img  className='tres' src={slider2} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Mojarra Frita Ba;ada de salsa abanero</h5>
                     <p id="resultados">Si lo tuyo es el picante esto es para ti</p>
                </div>
            </div>
            <div className='carousel-item '>
             <img  className='tres' src={slider3} class="d-block w-100" alt="slider 1"/>
                <div className="carousel-caption d-none d-md-block">
                <h5 id="resultados">Almejas Vivas</h5>
                     <p id="resultados">Solo para paladares exigentes</p>
                </div>
            </div>
        </div>
        
    </div>
    <Fragment>
    <footer id="footer" className="pb-4 pt-4">
    <div className="conatiner">
      <div className="row text-center">
        <div className="col-12 col-lg">
          <a href="#">Contacto</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Terminos y condiciones</a>
        </div>
        <div className="col-12 col-lg">
          <a href="#">Privacidad</a>
        </div>
      </div>
    </div>
   </footer>
    </Fragment>
    </main>
)





const App = () => {
  return (
    <Layout>
     {CarouselMyS()}
    </Layout>
  )
}

export default App;
