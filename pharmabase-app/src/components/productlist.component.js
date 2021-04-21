import React, { Component, state } from 'react';
import axios from 'axios';
import Home from "./productpage.component";
import EditProduct from "./editproductform.component";



class ProductList extends Component {

  constructor(props) {

    super(props);
    //this.showProductHandle = this.showProductHandle.bind();
    this.state = {
      apiBaseUrl: "http://localhost:8080",
      showProductList: true,
      showEditProductForm: false,
      UserData: [
      ]
    }
  }

  editButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      showEditProductForm: true, showProductList: false
    });
  }


  componentDidMount() {

    axios.get(this.state.apiBaseUrl + '/listproduct').then((response) => {
      this.setState({
        UserData: response.data
      });

    }).catch((e) => {
      console.log(e);
    });
    console.log(this.state.UserData);
  }


  render() {
    return (
      <div>
        {this.state.showProductList ?
          <div>
            <div class="App-header">
              <h1>PharmaBase - Powered by ACCENDERO</h1>
            </div>

            <br></br>

            <div class="sub-header">
              <h5>Product List</h5>
            </div>

            <div className="App">

              <table border='2' className="table" align='center' >

                <thead>
                  <tr>
                    <th scope="col">Appl_No</th>
                    <th scope="col">Item_ID</th>
                    <th scope="col">Product_No</th>
                    <th scope="col">Form</th>
                    <th scope="col">Drug_Name</th>
                    <th scope="col">Med_Count</th>
                    <th scope="col">Rack_No</th>
                    <th scope="col">Edit_Action</th>
                    <th scope="col">Delete_Action</th>
                  </tr>
                </thead>

                {this.state.UserData.map((data, key) => {
                  return (
                    <tbody id="cursorPointer">
                      <tr key={key}>
                        <td>{data.appl_no}</td>
                        <td>{data.item_id}</td>
                        <td>{data.product_no}</td>
                        <td>{data.form}</td>
                        <td>{data.drug_name}</td>
                        <td>{data.med_count}</td>
                        <td>{data.rack_no}</td>
                        <td><button type="submit" className="btn btn-primary" onClick={this.editButtonClick} >Edit</button></td>
                        <td><button type="submit" className="btn btn-primary" onClick={this.deleteButtonClick} >Delete</button></td>
                      </tr>
                    </tbody>

                  );
                })
                }

              </table>
            </div>
          </div>

          :
          <div></div>



        }

        {

          this.state.editproductForm ?
            <EditProduct></EditProduct>
            :
            <p></p>

        }


        {
          this.state.showProductPageForm ?
            <div><Home></Home></div>

            :
            <div></div>
        }

      </div>


    );






  }
}
export default ProductList;