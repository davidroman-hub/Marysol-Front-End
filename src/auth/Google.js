import React from 'react';
import GoogleLogin from 'react-google-login'
import axios from 'axios';


const Google = ({informParent = f => f }) => {

    const responseGoogle = (response) => {
        console.log(response.tokenId);
        axios({
            method: 'POST',
            url:`${process.env.REACT_APP_API}/google-login`,
            data:{idToken: response.tokenId},
        })
        .then(response=>{
            console.log('Google Signin Success', response)
            // inform parent component //<-- we need to pass all the helpers before for we can save the user in the database as the others accounts.
            informParent(response);
        
        })
        .catch(error=>{
            console.log('Google Signin Error', error.response)
        })
    }


    return (
        <div className="pb-3">
            <GoogleLogin
            // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={ renderProps =>(
             <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='btn btn-danger btn-lg btn-block'>
                <i className='fab fa-google pr-2'></i> Login with Google
             </button>)}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )

}

export default Google