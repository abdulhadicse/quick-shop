import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Cart/Card';
import Product from '../Product/Product';

const Shop = () => {
    
    const first15product = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first15product);

    const [cart, setCart] = useState([]);
    const [bdcart, setdbCart] = useState([]);
    
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
    
    
    const handleEvent = (clickedProduct)=>{
        const newCart = [...cart, clickedProduct];
        setCart(newCart);
        
        const count = newCart.filter( pd => pd.key === clickedProduct.key);
        addToDatabaseCart(clickedProduct.key, count.length); 
        
        const savedDB = getDatabaseCart();
        const productDB = Object.keys(savedDB);
        // console.log(productDB);
        const pdcart = productDB.map(pd => {
            const newData = fakeData.find(pdK => pdK.key === pd);
            newData.quantity = savedDB[pd];
            return newData;
        })
        setCart(pdcart);
    }

    const singleProduct = product.map(val => {
        return <Product key={val.key} single={val} btnShow={true} clickEvent={handleEvent}></Product>
    })
    

    return (
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9">
                        {singleProduct}
                    </div>

                    <div className="col-md-3">
                        <Card key={cart.key} orderCart ={cart}>
                            <button className="btn btn-warning w-100"><Link className="nav-link text-white" to="/review">Order Review</Link></button>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Shop;