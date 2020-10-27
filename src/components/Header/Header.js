import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Fragment>
            
                <nav className="navbar navbar-expand-sm nav-light bg-warning">
                    <a class="navbar-brand text-dark font-weight-bold ml-5" href="/">Quick Shop</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link text-white" href="/">Home</a> </li>
                        <li className="nav-item"> <a className="nav-link text-white" href="/">Shop</a></li>
                        <li className="nav-item"> <a className="nav-link text-white" href="/">Order Review</a></li>
                        <li className="nav-item"> <a className="nav-link text-white" href="/">Manage Inventory</a></li>
                    </ul>
                    <span className="ml-auto mr-5"> <FontAwesomeIcon icon={faCartPlus} /></span>
                </nav>
                
            
        </Fragment>
    );
};

export default Header;