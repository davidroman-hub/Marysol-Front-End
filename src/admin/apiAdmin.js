
 import {API} from '../Config'
 import {isAuth, getCookie} from '../auth/helpers'
// //Method to create a new category


export const createCategory = (userId, token, category) => {

    return fetch(`${API}/category/create/${isAuth()._id}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })

    .then(response => {
        return response.json(); 
    })
    .catch( err => { 
        console.log(err)
    })

}

//Method to create a new product

export const createProduct = (userId, token, product) => {

    return fetch(`${API}/product/create/${isAuth()._id}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            // "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body: product
    })

    .then(response => {
        return response.json(); 
    })
    .catch( err => { 
        console.log(err)
    })

}

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


/// get products method for the home page ///

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}; 


/// list all the orders to the admin dashboard /// 

export const listOrders = (token) => {
    return fetch(`${API}/order/list/${isAuth()._id}`, {
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/// enumerate status values method from backend ///

export const getStatusValues = (token) => {
    return fetch(`${API}/order/status-values/${isAuth()._id}`, {
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//update order status

export const updateOrderStatus = (userId,token,orderId,status) => {
    return fetch(`${API}/order/${orderId}/status/${isAuth()._id}}`, {
        method: "PUT",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({status,orderId})
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}




/**
 * 
 * to perform crud on product to manage them
 */

 /// get all the products

 export const getProductss= () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: 'GET'
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

 //get a single product
 export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

 // update single product

 export const updateProduct = (productId,userId, token,product) => {
    return fetch(`${API}/product/${productId}/${isAuth()._id}`, {
        method: "PUT",
        headers: {
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


 // delete single product

 export const deleteProduct = (productId,userId, token) => {
    return fetch(`${API}/product/${productId}/${isAuth()._id}`, {
        method: "DELETE",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

