import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row bg-warning">
                    <div className="col-md-12 mt-3 text-center text-dark">
                        <p> <b>Quick Shop</b> - A Simple E-commerce ReactJS Website.   </p>
                        <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://github.com/abdulhadicse" target="_blank">Abdul Hadi</a></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;