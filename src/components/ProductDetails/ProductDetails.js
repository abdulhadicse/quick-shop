import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';

const ProductDetails = () => {

    const { productKey } = useParams();

    const product = fakeData.find(pd => pd.key === productKey);
    
    const arr = [];
    
    for(let i=0; i<product.star; i++){
        arr[i] = i;
    }

    const rating = arr.map ( (value, index) =>{
        return <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
    })

    return (
        <Fragment>


            {/* <div className="container">
                <Product single= {product} btnShow ={false}></Product>
            </div> */}

             <div className="container mt-3">
                <div className="row mb-4 border p-2 rounded">
                    <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0 p-3">
                            <img src={product.img} alt="" />

                        </div>
                    </div>

                    <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div className="d-flex justify-content-between ml-4">
                                <div>
                                    <h5> <a href={product.url}>{product.name}</a>  </h5>
                                    <p className="mb-3 text-muted text-uppercase small">Seller by: {product.seller}</p>
                                    <p className="mb-2 text-muted text-uppercase small font-weight-bold">Price - ${product.price}</p>
                                    <p className="mb-2 text-muted text-uppercase small ">Whole Price - ${product.wholePrice}</p>
                                    <p className="mb-2 text-muted text-uppercase small ">Shipping - ${product.shipping}</p>
                                    <p className="mb-3 text-muted text-uppercase small">only {product.stock} left in stoke - order soon</p>

                                    <div>                                         
                                        {rating}                                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </Fragment>
    );
};

export default ProductDetails; <h1>Product Details</h1>