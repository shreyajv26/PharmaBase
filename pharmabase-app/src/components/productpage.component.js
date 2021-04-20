import React, { Component,state } from 'react';
import axios from 'axios';
import AddProduct from "./addproductform.component";
import  ProductList  from "./productlist.component";
import  EditProduct  from "./editproductform.component";


class Home extends Component {

  constructor(props) {

    super(props);
        this.addProductClick=this.addProductClick.bind();
        this.displayProductClick=this.displayProductClick.bind();
        this.searchProductClick=this.searchProductClick.bind();
        this.state = {
          apiBaseUrl: "http://localhost:8080",
          showProductList:false,
          showAddproductForm:false,
          showProductPageForm:true
          
        }
  }

  addProductClick = (e) => {
    e.preventDefault();
    this.setState({showAddproductForm:true,  showProductList:false
    });
  }


  displayProductClick = (e) => {
    e.preventDefault();
    this.setState({showProductPageForm:false , showProductList:true
});
    }


    searchProductClick = (e) => {
      e.preventDefault();
      this.setState({showProductPageForm:true
});
      }


  render() {
    return (
      <div>
        {this.state.showProductPageForm ?
          <div>
        <div class="App-header">
        <h1>PharmaBase - Powered by ACCENDERO</h1>
        </div>

       <div class="button">
       <br></br>
        <button
          type="submit"
          className="btn btn-primary mr-5"
          onClick={this.addProductClick}
        >
          Add a Product
          </button>
          <button
          type="submit"
          className="btn btn-primary mr-5"
          onClick={this.displayProductClick}  
        >
          Display all Products
          </button>

          <button
          type="submit"
          className="btn btn-primary mr-5"
          onClick={this.searchProductClick}
        >
          Search a Product
          </button>
          </div>
       </div>
       :
          <div></div>

        }
        


        {this.state.showAddproductForm ? 
          <AddProduct></AddProduct>
          :
          <p></p>
        
        }
        {this.state.showProductList ? 
          <ProductList></ProductList>
          :
          <p></p>
        
        }
        {this.state.showAddproductForm ? 
          <EditProduct></EditProduct>
          :
          <p></p>
        
        }
        


       
      </div>
        
    );
  
  }
}
export default Home;