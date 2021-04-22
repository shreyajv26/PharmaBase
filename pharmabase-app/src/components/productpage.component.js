import React, { Component, state } from 'react';
import { withRouter } from 'react-router-dom';
import AddProduct from "./addproductform.component";
import ProductList from "./productlist.component";
import EditProduct from "./editproductform.component";


class Home extends Component {

  constructor(props) {

    super(props);
    this.addProductClick = this.addProductClick.bind();
    this.displayProductClick = this.displayProductClick.bind();
    this.state = {
      apiBaseUrl: "http://localhost:8080",
      showProductList: false,
      showAddproductForm: false,
      showProductPageForm: true

    }
  }

  addProductClick = (e) => {
    e.preventDefault();
    let path = '/addproduct';
    this.props.history.push(path);
  }


  displayProductClick = (e) => {
    let path = '/listproduct';
    this.props.history.push(path);
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
        {this.state.editproductForm ?
          <EditProduct></EditProduct>
          :
          <p></p>

        }




      </div>

    );

  }
}
export default withRouter(Home);