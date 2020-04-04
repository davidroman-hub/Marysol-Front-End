import {API} from '../Config'
import {isAuth, getCookie} from '../auth/helpers'
/// get orders purchase history ///

export const getPurchaseHistory =(userId, token) => {
    return fetch(`${API}/orders/by/user/${isAuth()._id}`, {
        method: "GET",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}; 