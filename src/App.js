import React,{Fragment} from 'react';
import Layout from './core/Layout'
import {Link} from 'react-router-dom'

// Photos

import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'


//styles
import './App.scss'
import './Home.scss'


window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = '1'- window.pageYOffset / 650;})




const Home = () => {
  return (
    <Fragment>
                <header className="header-content" id="header-content">
                <p className="description">
                          Más información desplazandose hacia abajo
                        </p>
                    <div className="header-text">   
                    <span className="orange-neon-title regular-text">Mar y Sol</span>
                        <h1 className="title">
                            Restaurante
                            <br/>  <br/>       
                        </h1>
                    </div>
                </header>
                 <main>
                    <section className="container">
                        <h2 className=" h2-subtitle">
                        Quienes somos?
                        </h2>
                        <p>
                          <span className="capital-letter">M</span>y name is David Roman Aguirre<br/> - I'm a web developer and Aquaculture Engineer. <br/>
                          - I completed my JS Fullstack program from BEDU Tech (Mexico City) in November 2019.
                        
                        </p>
                        <div className="Skills-icon">
                        <div className=" info2">
                        Skills
                        </div>
                        {/* <p className='React'>
                            
                        <img alt='react' src={react}/>
                        </p>
                        <p className='Node'>
                        <img alt='node' src={node}/>
                        </p>
                        <p className="Mongo">
                          <img alt='mongo' src={mongo}/>
                        </p>
                        <p className='Sass'>
                        <img alt='sass' src={sass}/>
                        </p> */}

                        </div>


                        <h2 className=" h2-subtitle">
                        Projects
                        </h2>

                        <p> At this moment i'm engaged in multiple Projects as a Freelancer. 


                           Some of my work includes creating Ecommerce applications, utilizing MERN App, 
                           for a clothes retailer in mexico city.
                            </p>

                        <p>Also, i'm working as well with a professinal Contemporary dancer instructor from Mexico City, 
                            in order to provide a portfolio for her. I'm using React and currently maintain the web-page. 
                            
                        </p>


                        <h2 className=" h2-subtitle">
                        Why I wanted to be a Web developer ?
                        </h2>
                            I wanted to try to be something different, i wanted to find my path as a web developer in another coutry far from Mexico.
                            It's because of this that i started to study the path of the web developer, a new world to discover , new things, new technologies, 
                            the opportunity to meet new people, and to work with them as well.
                          
                      
             


                   
                        {/* <p className="footer-nav">
                            <Footer></Footer>
                        </p> */}
                    </section>
                    
                    <h2 className=" h2-subtitle">
                        Interests
                        </h2>
                        {/* <p >
                            My principal hobbie it's travel around the world, below are some photos of my travels. Right now im living in Paris France, i would like to meet another countries, first travel around europe , and after meet Asia
                            and another beautiful places. I love to play videogames , actually i participated in videogames tournaments (call of duty, apex, fortnite ,etc..), i love to do that, in fact, 
                            i have a Youtube Chanel about videogames and tournaments  and also a FaceBook fan page for the videogames. the links are on the footer. 
                        </p> */}

                    <div className="Hobbies-icon">
                        

                    </div>

                        <p>
                            {/* <Carousel></Carousel> */}
                        </p>
                       
                            
                        <div className="info">
                        Thanks for reading! And i hope we can work together!
                        </div>




                </main>
          
            </Fragment>
  )
}


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
      {Home()}
     {CarouselMyS()}
    </Layout>
  )
}

export default App;
