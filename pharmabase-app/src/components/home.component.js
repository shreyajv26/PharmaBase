import React, { Component,state } from 'react';
import axios from 'axios';
/*import PharmaDataService from "../services/pharma.service";*/
import LoginForm from "./loginform.component";
import SignUpForm from "./signupform.component";
import ProductForm from "./product.component";


class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {
      email: '',
      password: '',
      apiBaseUrl: "http://localhost:8080",
     
      showProductList:false,
      showAddProductForm:false
    }
  }

  handleAddProductFrom = (e) => {
    e.preventDefault();
    this.setState({showProductList:true,
      showProductList:false});
  }
  handleDisplayProducts = (e) => {
    e.preventDefault();
    this.setState({showProductList:false,
      showProductList:true});
  }
  

  render() {
    return (
      <div>
        <h1>PharmaBase - Powered by ACCENDERO</h1>
        <h5>Products</h5>
       <div>
       <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmitClick}
        >
          Add Product
          </button>
          <button
          type="submit"
          className="btn btn-primary"
          onClick={this.signupHandleClick}  
        >
          Display Products
          </button>

       </div>


        {this.state.showProductList ? 
         <ProductForm></ProductForm>
          :
          <p></p>
          }
      </div>
    );
  }
}
export default Home;