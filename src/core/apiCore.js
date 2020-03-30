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
