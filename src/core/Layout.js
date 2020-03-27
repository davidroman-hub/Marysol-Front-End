import React,{Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {isAuth, signout} from '../auth/helpers'
import Logo from './logo12.png'
import './Layout.scss'


const Layout = ({children,match,history}) => {



const isActive = path => {
    if(match.path === path) {
        return {color:'#ff9900'}
    } else{
        return {color:'#fff'}
    }
};


    const nav = () => (
        <ul className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <Link className='nav-color' class="nav-link" to='/'>
                    <img alt='logo' width='80px' height='80px' src={Logo}/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className=" nav-link" style={isActive('/')}>
                            {/* home / {JSON.stringify(history)}     */}
                            Nosotros
                        </Link>
                    </li>

                {!isAuth () && (
                    <Fragment>
                        <li className="nav-item">
                            <Link to='/signup' className=" nav-link" style={isActive('/signup')}> Registrate </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='/signin' className=" nav-link" style={isActive('/signin')}> Inicia Sesión </Link>
                        </li>
                </Fragment>
                )}
                {isAuth () && isAuth().role === 'admin'  && (

                    <li className="nav-item">
                        <Link className="nav-link" style={isActive('/admin')} to="/admin">
                            {isAuth().name}
                            </Link>    
                    </li>    
                )}

                {isAuth () && isAuth().role === 'subscriber'  && (

                        // <li className="nav-item">
                        //     <Link className="nav-link" style={isActive('/private')} to="/private">
                        //         {isAuth().name}
                        //         </Link>    
                        // </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive('/user/dashboard')} to="/user/dashboard">
                                {isAuth().name}
                            </Link>    
                        </li>     
                
                )}
              

                  {isAuth () && (

                        <li className="nav-item">
                                <span className="nav-link"
                                 style={{cursor: 'pointer', color: '#fff'}}
                                 onClick={()=>{
                                    signout(()=>{
                                        history.push('/')
                                    })
                                }}>Sign out</span>
                        </li>                 
                      
                )}
                    </div>
                </div>
        </ul>
    )
    return(
        <Fragment>
            {nav()}
            <div  className="container"
            >
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);