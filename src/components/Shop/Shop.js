import React, { Fragment, useState } from 'react';
import fakeData from '../../fakeData';
import Card from '../Cart/Card';
import Product from '../Product/Product';

const Shop = () => {
    
    const first15product = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first15product);

    const [cart, setCart] = useState([]);

    const handleEvent = (clickedProduct)=>{
        const newCart = [...cart, clickedProduct];
        setCart(newCart);
    }

    const singleProduct = product.map(val => {
        return <Product single={val} clickEvent={handleEvent}></Product>
    })

    return (
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9">
                        {singleProduct}
                    </div>

                    <div className="col-md-3">
                        <Card orderCart ={cart}></Card>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Shop;