import {API} from '../Config'

import {isAuth, getCookie} from '../auth/helpers'
// Method for get the categories from the back

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


// method to fetch the results of filtered results:

export const getFilteredProducts = (skip,limit, filters = {}) => { 
    const data = { skip, limit, filters }
    return fetch(`${API}/products/by/search`,{
        method:"POST",
        headers: { 
                Accept: "application/json",
                "Content-Type":"application/json",

            },
            body:JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        })
}

// the read method to get the product from the page and

export const read = productId => {
    return fetch(`${API}/product/${productId}`,{
        method: "GET"
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
} 



// get the related products method

export const listRelated = productId => {
    return fetch(`${API}/products/related/${productId}`, {
        method: 'GET'
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
} 

// to take the token from the backend from braintree i have to made another methods for take them

export const getBraintreeClientToken = (Id, token) => {
    return fetch(`${API}/braintree/getToken/${isAuth()._id}`,{
        method:"GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then ( response => {
        return response.json()
    })
    .catch( err => console.log(err))
}

// Process to payment method

export const processPayment = ( userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
    .then((response) => {
        return response.json()
    })
    .catch((err) => console.log(err))
}

///// create order //// 

export const createOrder = ( userId, token, createOrderData) => {
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({order:createOrderData})
    })
    .then((response) => {
        return response.json()
    })
    .catch((err) => console.log(err))
}
