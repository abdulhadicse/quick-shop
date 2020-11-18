import React, { Fragment } from 'react';

const ReviewCart = (props) => {
    const { img, name, seller, price, stock, key, quantity } = props.single;
    return (
        <Fragment>
            <div className="container mt-3">
                <div class="row mb-4 border p-2 rounded">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img src={img} alt="" />

                        </div>
                    </div>

                    <div class="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div class="d-flex justify-content-between ml-4">
                                <div>
                                    <h5> {name} </h5>
                                    <p class="mb-3 text-muted text-uppercase small">by: {seller}</p>
                                    <p class="mb-2 text-muted text-uppercase small font-weight-bold">${price}</p>
                                    <p class="mb-3 text-muted text-uppercase small">Quantity: {quantity}</p>

                                    <div>

                                        <button className="btn btn-success" onClick={() => props.remove(key)}> Remove Order</button>

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

export default ReviewCart;