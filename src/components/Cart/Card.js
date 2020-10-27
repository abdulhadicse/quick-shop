import React, { Fragment } from 'react';

const Card = (props) => {

    const productPrice = props.orderCart.reduce((total, proCat) => total + proCat.price, 0);

    const discount = ((productPrice * 5) / 100);

    const toFixedDecimal = (num)=>{
        const fixed2= num.toFixed(2);
        return Number(fixed2);
    }

    let shippingCost = 0.0;

    if( productPrice > 50 ){
        shippingCost = 12.99;
    }
    else if(productPrice > 0){
        shippingCost = 4.99;
    }

    const taxVat = ((productPrice-discount)*2 / 100);
    
    const grandTotal = (productPrice + shippingCost + taxVat) - discount;

    return (
        <Fragment>

            <div className="bg-warning p-3">
                <span class="font-weight-bold">Order Recap</span>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Order Items</span> <span>{props.orderCart.length}</span> </div>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Product Price</span> <span>${toFixedDecimal(productPrice)}</span> </div>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Discount</span> <span>- ${toFixedDecimal(discount)}</span> </div>

                <hr />
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Shipping Cost </span> <span>${shippingCost}</span> </div>
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Tax + VAT </span> <span>${toFixedDecimal(taxVat)}</span> </div>
                <hr />
                <div class="d-flex justify-content-between mt-2"> <span class="fw-500">Total </span> <span class="text-success">${toFixedDecimal(grandTotal)}</span> </div>
            </div>


        </Fragment>
    );
};

export default Card;