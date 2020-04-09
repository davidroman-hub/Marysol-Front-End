import React,{Fragment, useState, useCallback} from 'react'
import Layout from './core/Layout'
import './Menu.scss'
import Logo from '../src/img/logo1.png'

//component 

window.addEventListener('scroll', () => {
  const header = document.getElementById('header-content');
    header.style.opacity = false})



const MenuDes = () => {
  

  const menuReal = () => (
      <div className="Menu-container">
        <div className="Menu-logo text-center">
            <img height="150px" src={Logo} alt="Menu logo"/>
        </div>
        <div className="Capital-menu">
            <h1 className="capital text-center">MENU</h1>
        </div>
        <div className="row">
                <div>
                    {/* first card */}
        <div className="menu-card ">
        {/* <img src={Logo} style={{width: '5%'}} alt="none" /> */}
            <div class="menu-card-container">
                 <h4 className='text-center'><b>Entradas</b></h4>
                 {/* <img className="vineta" src={vineta} alt="binetas"/> */}
                 <hr/>
                 <p className="item-description">Quesadilla de Mariscos y Pescados<span className="price fw4 baskerville"> $30</span></p>
                 <p className="item-description">Quesadilla de Camarón<span className="price fw4 baskerville"> $35</span></p>
                 <p className="item-description">Filetitos Pz.<span className="price fw4 baskerville"> $35</span></p>
                 <p className="item-description">Tacos de Filetitos Pz.<span className="price fw4 baskerville"> $45</span></p>
                 <p className="item-description">Tacos Dorados de Camarón 3 Pz.<span className="price fw4 baskerville"> $110</span></p>
                 <p className="item-description">Arroz con Camarón<span className="price fw4 baskerville"> $140</span></p>
                 <p className="item-description">Aguachile de Camarón<span className="price fw4 baskerville"> $160</span></p>
                 <p className="item-description">Aguachile de Callo<span className="price fw4 baskerville"> $180</span></p>
                 <p className="item-description">Carpaccio de Salmón<span className="price fw4 baskerville"> $180</span></p>
                 <p className="item-description">Carpaccio de Atún<span className="price fw4 baskerville"> $180</span></p>

                    </div>
                    </div>
            </div>
                
        <div>
                    {/* Second card */}
            <div className="menu-card">
                {/* <img src={Logo} style={{width: '5%'}} alt="none" /> */}
            <div class="menu-card-container">
                 <h4 className='text-center'><b>Cockteles y ceviches</b></h4>
                 <hr/>
                 <p className="item-description">Camarón<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Pescado<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Ostión<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Campechana<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Jaiba<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Callo de Hacha<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> $80</span></p>
                 <p className="item-description">Caracol<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Pata de Mula<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Pulpo<span className="price fw4 baskerville"> G $140</span><span className="price fw4 baskerville"> Ch $80</span></p>
                 <p className="item-description">Muelve a la vida<span className="price fw4 baskerville"> G $180</span><span className="price fw4 baskerville"> Ch $155</span></p>
                </div>
            </div>
        </div>

        <div>
                    {/* third card */}
                    <div className="menu-card">
                {/* <img src={Logo} style={{width: '5%'}} alt="none" /> */}
            <div class="menu-card-container">
                 <h4 className='text-center'><b>Caldos y Sopas</b></h4>
                 <hr/>
                 <p className="item-description">Consomé solo<span className="price fw4 baskerville"> $30</span></p>
                 <p className="item-description">Consomé con Verdura (Papa y Zanahoria)<span className="price fw4 baskerville"> $35</span></p>
                 <p className="item-description">Consomé con Camarón y verdura<span className="price fw4 baskerville"> $50</span></p>
                 <p className="item-description">Consomé con Camarón<span className="price fw4 baskerville"> $45</span></p>
                 <p className="item-description">Caldo de Camarón<span className="price fw4 baskerville"> $110</span></p>
                 <p className="item-description">Caldo de Pescado (Robalo ó Huachinango)<span className="price fw4 baskerville"> $110</span></p>
                 <p className="item-description">Caldon de almeja<span className="price fw4 baskerville"> $110</span></p>
                 <p className="item-description">Sopa de Mariscos<span className="price fw4 baskerville"> $140</span></p>
                </div>
            </div>
        </div>
                <div>
        <div className="menu-card">
            <div className="menu-card-container">
                <h4 className='text-center'><b>Moluscos</b></h4>
                <hr/>
                <p class="item-description">Ostión en su Concha<span className="price fw4 baskerville"> $120</span></p>
                <p class="item-description">Ostiones rasurados con verdura<span className="price fw4 baskerville"> $130</span></p>
                <p class="item-description">Ostiones rasurados con Camarón<span className="price fw4 baskerville"> $160</span></p>
                <p class="item-description">Pata de Mula<span className="price fw4 baskerville"> $130</span></p>
                <p class="item-description">Pata de Mula rasurada con verdura<span className="price fw4 baskerville"> $140</span></p>
                <p class="item-description">Pata de Mula rasurada con Camarón<span className="price fw4 baskerville"> $160</span></p>
                <p class="item-description">Almeja Viva<span className="price fw4 baskerville"> $120</span></p>
                <p class="item-description">Almeja Viva rasurada con Verdura<span className="price fw4"> $130</span></p>
                <p class="item-description">Almeja Viva rasurada con Camarón<span className="price fw4 baskerville"> $160</span></p>
                </div>
            </div>
        </div>
        <div>
            <div className="menu-card">
                <div className="menu-card-container">
                <h4 className='text-center'><b>Pulpos</b></h4>
                    <hr/>
                    <p className="item-description">En su tinta<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Pulpo y Camarón al ajillo<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Pulpo encebollado<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Pulpo enchipotlado<span className="price fw4 baskerville"> $170</span></p>  
                </div>
            </div>
        </div>
                <div>
                    {/* <h1>Adios</h1> */}
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Camarones</b></h4>
                            <hr/>
                            <p className="item-description">Camarones al mojo, fritos ó a la plancha<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Camarones Empanizados<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Camarones para Pelar<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Camarones a la Diabla<span className="price fw4 baskerville"> $170</span></p>
                    <p className="item-description">Camarones Enchiplotlados<span className="price fw4 baskerville"> $170</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <h1>Adios</h1> */}
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Filetes de Pescado</b></h4>
                            <hr/>
                            <p className="item-description">Filete Empanizado<span className="price fw4 baskerville"> $140 </span></p>
                             <p className="item-description">Filete a la Plancha<span className="price fw4 baskerville"> $140</span></p>
                             <p className="item-description">Filetea la Diabla<span className="price fw4 baskerville"> $140</span></p>
                             <p className="item-description">Filete Enchiplotlados<span className="price fw4 baskerville"> $140</span></p>
                             <p className="item-description">Filete Gratinado<span className="price fw4 baskerville"> $160</span></p>
                             <p className="item-description">Filete empapelado con Mariscos<span className="price fw4 baskerville"> $190</span></p>
                             <p className="item-description">Salmón al gusto<span className="price fw4 baskerville"> $180</span></p>
                             <p className="item-description">Steak de Atún a la placha o Sellado<span className="price fw4 baskerville"> $180</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <h1>Adios</h1> */}
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Especialidades</b></h4>
                            <hr/>
                            <p className="item-description">Jaiba Rellena 2pz<span className="price fw4 baskerville"> $125</span></p>
                             <p className="item-description">Chile Relleno de Mariscos 1Pz.<span className="price fw4 baskerville"> $150</span></p>
                             <p className="item-description">Alambre de Mariscos<span className="price fw4 baskerville"> $160</span></p>
                             <p className="item-description">Alambre de Mariscos C/Queso<span className="price fw4 baskerville"> $175</span></p>
                             <p className="item-description">Paella Valenciana (Sábados y Domingo ó Pedido)<span className="price fw4 baskerville"> $190</span></p>
                             <p className="item-description">Paella Valenciana Media orden<span className="price fw4 baskerville"> $110</span></p>
                             <p className="item-description">Arroz con mariscos<span className="price fw4 baskerville"> $160</span></p>
                             <p className="item-description">Lomo de Huachinango a la veracruzana<span className="price fw4 baskerville"> $135</span></p>
                        </div>
                    </div>
                </div>
                <div>
                   
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                        <h4 className='text-center'><b>Pescados Fritos</b></h4> 
                        <hr/>        
                        <p className="item-description">Mojarra al Gusto Aproximadamente 1kg. (Frita, al mojo de ajo, a la diabla, al ajillo, ó enchipotlada)<span className="price fw4 baskerville"> $190</span></p>
                        <p className="item-description">Robalo, Pámpano y Huachinango al gusto de 800 g a 1kg. (Solo por Temporada)<span className="price fw4 baskerville"> $250</span></p>
                        </div>
                    </div>
                </div>
                <div>
             
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Tostadas</b></h4>
                            <hr/>
                         <p className="item-description">Tostadas de Camarón<span className="price fw4 baskerville"> $60</span></p>
                         <p className="item-description">Tostadas de Pescado<span className="price fw4 baskerville"> $65</span></p>
                         <p className="item-description">Tostadas de Jaiba<span className="price fw4 baskerville"> $65</span></p>
                         <p className="item-description">Tostadas de Atún aleta amarilla<span className="price fw4 baskerville"> $80</span></p>
                         <p className="item-description">Tostadas de Callo de hacha<span className="price fw4 baskerville"> $90</span></p>
                         <p className="item-description">Tostadas de Pulpo<span className="price fw4 baskerville"> $70</span></p>
                         <p className="item-description">Tostadas de Caracol<span className="price fw4 baskerville"> $70</span></p>
                        </div>
                    </div>
                </div>
                <div>
                 
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Postres</b></h4>
                            <hr/>
                         <p className="item-description">Fresas o Duraznos con Crema<span className="price fw4 baskerville"> $40</span></p>
                         <p className="item-description">Flan Napolitano<span className="price fw4 baskerville"> $40</span></p>
                         <p className="item-description">Platanos Fritos<span className="price fw4 baskerville"> $40</span></p>
                         <p className="item-description">Helados<span className="price fw4 baskerville"> $60</span></p>
                        </div>
                    </div>
                </div>
                <div>
            
                    <div className='menu-card'>
                        <div className='menu-card-container'>
                            <h4 className='text-center'><b>Bebidas</b></h4>     
                            <hr/>            
                           <p className="item-description">Café<span className="price fw4 baskerville"> $20</span></p>
                           <p className="item-description">Refresco 312,330,355 ml.<span className="price fw4 baskerville"> $20</span></p>
                           <p className="item-description">Botella de agua 500 ml.<span className="price fw4 baskerville"> $20</span></p>
                           <p className="item-description">Jugó de Naranja 300 ml.<span className="price fw4 baskerville"> $25</span></p>
                           <p className="item-description">Naranja ó Limonada 300 ml.<span className="price fw4 baskerville"> $32</span></p>
                           <p className="item-description">Cervezas 355 ml.<span className="price fw4 baskerville"> $38</span></p>
                           <p className="item-description">Micheladas ó Cubana 350 ml.<span className="price fw4 baskerville"> $45</span></p>
                           <p className="item-description">Cerveza con Clamato 350 ml.<span className="price fw4 baskerville"> $55</span></p>
                           <p className="item-description">Cerveza con Mariscos 350 ml.<span className="price fw4 baskerville"> $75</span></p>
                           <p className="item-description">Sangría natural 300 ml (Aprx)<span className="price fw4 baskerville"> $65</span></p>
                           <p className="item-description">Cerveza de Barril , Micheladas ó Cubana 450 ml.<span className="price fw4 baskerville"> $55</span></p>
                           <p className="item-description">Cerveza de Barril Clara u Obscura 450 ml.<span className="price fw4 baskerville"> $50</span></p>
                           <p className="item-description">Cerveza de Barril con Clamato 450 ml.<span className="price fw4 baskerville"> $60</span></p>
                           <p className="item-description">Cerveza de Barril con Mariscos 450 ml.<span className="price fw4 baskerville"> $80</span></p>
                        </div>
                    </div>
                </div>
               
                


            </div>
      </div>
  )

  
  return (
   <Layout>
     {menuReal()}
     {/* {menusCard()} */}
     <div id="header-content"/>
   </Layout>
  )
}


export default MenuDes