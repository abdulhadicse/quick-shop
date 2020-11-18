import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import '../../App.css';

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

    return (
        <Fragment>
            <div className="container">
                <h3 className="text-center mt-2">Shipment Order Form</h3>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register} placeholder="Your Name"/>
                {errors.name && 'Name is required.'}
                
                <input name="email" ref={register({ required: true })} placeholder="Your Email"/>
                {errors.email && 'Email is required.'}
                
                <input name="address" ref={register({ pattern: /\d+/ })} placeholder="Your Address"/>
                {errors.address && 'Address is required'}
                
                <input name="phone" ref={register({ pattern: /\d+/ })} placeholder="Your Phone"/>
                {errors.phone && 'Phone number is required.'}
                <input type="submit" />
                </form>
            </div>
        </Fragment>
    );
};

export default Shipment;