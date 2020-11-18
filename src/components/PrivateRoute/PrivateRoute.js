import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContex } from '../../App';

const PrivateRoute = ({children, ...rest}) => {

    const [loggedIn, setLoggedIn] = useContext(userContex);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedIn.GEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;