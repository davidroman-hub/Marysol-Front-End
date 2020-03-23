import React from 'react';
import Layout from './core/Layout'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      <div className='col-md-6 offset-md-3 text-center'>
        <h1 className="p-5">React Node Mongo DB Authentication Boilerplate</h1>
        <h2>MERN stack</h2>
        <h3>Created by  J. David Roman Aguirre</h3>
        <hr/>
        <p className='lead'>MERN stack login register system with account activation,
        login with Facebook and google as well as private and protected routes for authenticated user and users
        with role of admin, reset password etc..
        </p>
        <hr/>
        <a href='https://github.com/davidroman-hub'> Click Here if you want to see  more of my work</a> <i className='fab fa-github pr-2'></i>
      </div>
    </Layout>
  )
}

export default App;
