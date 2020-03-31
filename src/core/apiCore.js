import {API} from '../Config'

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