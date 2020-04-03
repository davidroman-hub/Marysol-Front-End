import React, {useEffect,useState} from 'react';
import { isAuth ,getCookie} from '../auth/helpers'
import { Link ,Redirect} from 'react-router-dom'
import { getBraintreeClientToken , processPayment} from './apiCore'
import DropIn from 'braintree-web-drop-in-react'
import { emptyCart } from '../core/CartHelpers'
import {createOrder} from './apiCore'





const Checkout = ({product, setRun = f => f, run = undefined}) => {
    


    
//State to take the token from braintree
const [data, setData] = useState({
    loading:false,
    success:false,
    clientToken:null,
    error:'',
    instance:{},
    address:''
})

// if the user is Auth

const token = getCookie('token')  //// <-- right one
const Id = getCookie('token')  //// <-- right one


// get teh token method

const getToken = (Id, token) => {
    getBraintreeClientToken(Id, token).then(data => {
        if (data.error) {
            console.log(data.error);
            setData({ ...data, error: data.error });
        } else {
            console.log(data);
            setData({ clientToken: data.clientToken });
        }
    });
};

useEffect(() => {
    getToken(Id, token);
}, []);

const handleAddress = event => {
    setData({ ...data, address: event.target.value });
};

const getTotal = () => {
    return product.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.price;
    }, 0);
};

const showCheckout = () => {
    return isAuth() ? (
        <div>{showDropIn()}</div>
    ) : (
        <Link to="/signin">
            <button className="btn btn-primary">Sign in to checkout</button>
        </Link>
    );
};

let deliveryAddress = data.address;

const buy = () => {
    setData({ loading: true });
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    let nonce;
    let getNonce = data.instance
        .requestPaymentMethod()
        .then(data => {
            // console.log(data);
            nonce = data.nonce;
            // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
            // and also total to be charged
            // console.log(
            //     "send nonce and total to process: ",
            //     nonce,
            //     getTotal(products)
            // );
            const paymentData = {
                paymentMethodNonce: nonce,
                amount: getTotal(product)
            };

            processPayment(Id, token, paymentData)
                .then(response => {
                    console.log(response);
                    // empty cart
                    // create order

                    const createOrderData = {
                        products: product,
                        transaction_id: response.transaction.id,
                        amount: response.transaction.amount,
                        address: deliveryAddress
                    };

                    createOrder(Id, token, createOrderData)
                        .then(response => {
                            emptyCart(() => {
                                setRun(!run); // run useEffect in parent Cart
                                console.log('payment success and empty cart');
                                setData({
                                    loading: false,
                                    success: true
                                });
                            });
                        })
                        .catch(error => {
                            console.log(error);
                            setData({ loading: false });
                        });
                })
                .catch(error => {
                    console.log(error);
                    setData({ loading: false });
                });
        })
        .catch(error => {
            // console.log("dropin error: ", error);
            setData({ ...data, error: error.message });
        });
};

const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: '' })}>
        {data.clientToken !== null && product.length > 0 ? (
            <div>
                <div className="gorm-group mb-3">
                    <label className="text-muted">Delivery address:</label>
                    <textarea
                        onChange={handleAddress}
                        className="form-control"
                        value={data.address}
                        placeholder="Type your delivery address here..."
                    />
                </div>

                <DropIn
                    options={{
                        authorization: data.clientToken,
                        paypal: {
                            flow: 'vault'
                        }
                    }}
                    onInstance={instance => (data.instance = instance)}
                />
                <button onClick={buy} className="btn btn-success btn-block">
                    Pay
                </button>
            </div>
        ) : null}
    </div>
);

const showError = error => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = success => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        Thanks! Your payment was successful!
    </div>
);

const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

return (
    <div>
        <h2>Total: ${getTotal()}</h2>
        {showLoading(data.loading)}
        {showSuccess(data.success)}
        {showError(data.error)}
        {showCheckout()}
    </div>
);
};

export default Checkout;
