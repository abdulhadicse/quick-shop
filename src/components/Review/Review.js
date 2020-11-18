import React, { Fragment, useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import ReviewCart from '../ReviewCart/ReviewCart';
import Card from '../Cart/Card';
import happy from '../../assets/giphy.gif';
import { useHistory } from 'react-router-dom';
const Review = () => {

    const [cart, setCart] = useState([]);
    
    const history = useHistory();
    
    const removeCardData = () =>{
        history.push('/shipment');
    }
    
    useEffect(() => {
        const savedDB = getDatabaseCart();
        const productDB = Object.keys(savedDB);
        // console.log(productDB);
        const pdcart = productDB.map(pd => {
            const newData = fakeData.find(pdK => pdK.key === pd);
            newData.quantity = savedDB[pd];
            return newData;
        })
        setCart(pdcart);
    }, []);

    const removeProduct = (product) => {
        removeFromDatabaseCart(product);

        const newData = cart.filter(pd => pd.key !== product);
        setCart(newData);
    }

    const reviewProduct = cart.map(pd => {
        return <ReviewCart remove={removeProduct} key={pd.key} single={pd}></ReviewCart>
    })

    

    return (

        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9">
                        {reviewProduct}
                        
                    </div>

                    <div className="col-md-3">
                        <Card key={cart.key} orderCart={cart}>
                            <button onClick={removeCardData} className="btn btn-warning text-white font-weight-bold w-100 p-3">Checkout Order</button>
                        </Card>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Review;