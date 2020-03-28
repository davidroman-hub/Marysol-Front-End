import cookie from 'js-cookie'

// set in cookie 'token'
export const setCookie = (key, value) => {
    if(window !== 'undefined' ){
        cookie.set(key, value,{
            expires: 1
        })
    }
}

// remove from cookie
export const removeCookie = (key) => {
    if(window !== 'undefined' ){
        cookie.remove(key, {
            expires: 1
        })
    }
}


//get from cookie such as stored token
// will be useful weh  we need to make request to server with the token 
export const getCookie = (key, value) => {
    if(window !== 'undefined' ){
       return cookie.get(key)
    }
}

// set in the local storage
export const setLocalStorage = (key, value) => {
    if(window !== 'undefined' ){
        localStorage.setItem(key, JSON.stringify(value)) //<-- whe we want to save something in the local storage have to be json data
    }
}

//remove from the local storage

export const removeLocalStorage = (key) => {
    if(window !== 'undefined' ){
        localStorage.removeItem(key) //<-- whe we want to remove something in the local storage have to be json data
    }
}

// authenticate user by passing data to cookie and localstorage during signin
//this method its very importan, we have to bring the response when the user has a succes auth for made some stuffs
export const authenticate = (response,next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();}

// export const authenticate = (data, next) => {
//     if(typeof window !== 'undefined') {
//         localStorage.setItem('jwt', JSON.stringify(data))  //<-- setItem its for save
//         next()
//     }
// };

// access user in from localstorage

export const isAuth = () =>{
    if(window !== 'undefined' ){
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}

export const isAuths = () => { 

    if (typeof window == 'undefined') { 
        return false
    }

    if(localStorage.getItem('jwt')) { 
        return JSON.parse(localStorage.getItem('jwt'))
    } else { 
        return false
    }
}

export const signout = next => {
    removeCookie('token')
    removeLocalStorage('user')
    next()
}


//// update user /////////

export const updateUser = (res, next) =>{
    console.log('update user in local storage', res)
    if( typeof window !== 'undefined'){
        let auth = JSON.parse(localStorage.getItem('user'))
        auth = res.data
        localStorage.setItem('user', JSON.stringify(auth))
    }
    next()
}