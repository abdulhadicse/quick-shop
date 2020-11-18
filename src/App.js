import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './Footer/Footer';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Inventory from './components/Inventory/Inventory';

export const userContex = createContext();



function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <div className="App">
      <userContex.Provider value={[loggedIn, setLoggedIn]}>
      
      <Router>
        <Header></Header>
        <Switch>
          
          <Route path="/shop">
              <Shop></Shop>
          </Route>

          <Route path="/review">
              <Review></Review>
          </Route>

          <PrivateRoute path="/inventory">
              <Inventory></Inventory>
          </PrivateRoute>

          <Route path="/login">
              <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
              <Shipment></Shipment>
          </PrivateRoute>

          <Route exact path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="*">
            <Shop />
          </Route>

        </Switch>

      </Router>
      
      </userContex.Provider>
      
    </div>
  );
}

export default App;
