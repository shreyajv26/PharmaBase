import React from "react";
import ReactDOM from "react-dom";

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";

//import * as serviceWorker from "./serviceWorker";
import LoginForm from "./components/loginform.component";
import AddProduct from "./components/addproductform.component";
import ProductList from "./components/productlist.component";
import SignUpForm from "./components/signupform.component";
import Home from "./components/productpage.component";
import SignUpSuccess from "./components/signupsuccess.component";
import EditProduct from "./components/editproductform.component";
import DeleteProduct from "./components/deleteproductform.component";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
              <Route exact path='/' component={LoginForm} />
              <Route exact path='/addproduct' component={AddProduct} />
              <Route exact path='/listproduct' component={ProductList} />
              <Route exact path='/register_process' component={SignUpForm} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/success' component={SignUpSuccess} />
              <Route exact path='/editproduct' component={EditProduct} />
              <Route exact path='/deleteproduct' component={DeleteProduct} />
          </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);



///s/serviceWorker.unregister();