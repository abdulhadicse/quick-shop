import React, { Fragment, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { userContex } from '../../App';

const Header = () => {

    const [loggedIn, setLoggedIn] = useContext(userContex);
    return (
        <Fragment>
            
                <nav className="navbar navbar-expand-sm nav-light bg-warning">
                    <Link className="navbar-brand text-dark font-weight-bold ml-5" to="/">Quick Shop</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <Link className="nav-link text-white" to="/">Home</Link> </li>
                        <li className="nav-item"> <Link className="nav-link text-white" to="/shop">Shop</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-white" to="/review">Order Review</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-white" to="/inventory">Manage Inventory</Link></li>
                    </ul>

                    <span className="ml-auto mr-5"> {loggedIn.GEmail ? <span><FontAwesomeIcon className="text-info" icon={faLockOpen} /> <Link className="nav-link d-inline-block text-white" onClick={()=> setLoggedIn({})} >SignOut</Link></span> : <span><FontAwesomeIcon className="text-info" icon={faLock} /> <Link className="nav-link d-inline-block text-white" to="/login">Login</Link></span>}</span>
                    
                    
                </nav>
                
            
        </Fragment>
    );
};

export default Header;