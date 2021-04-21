import React, { Component, state } from 'react';
import axios from 'axios';
import Home from "./productpage.component";
import ProductList  from "./productlist.component";



class AddProduct extends Component {

  constructor(props) {

    super(props);
    this.addButtonClick = this.addButtonClick.bind();
    this.state = {
      ApplNo: '',
      ProductNo: '',
      Form: '',
      Strength: '',
      ReferenceDrug: '',
      DrugName: '',
      ActiveIngredient: '',
      ReferenceStandard: '',
      Med_Count: '',
      RACKNO: '',

      apiBaseUrl: "http://localhost:8080",
      showLoginForm: false,
      showProductList: false,
      showaddProductForm: true
    }
  }

  addButtonClick = (e) => {
    e.preventDefault();
    var data = {
      "appl_no": this.state.ApplNo,
      "product_no": this.state.ProductNo,
      "form": this.state.Form,
      "drug_name": this.state.DrugName,
      "med_count": this.state.Med_Count,
      "rack_no": this.state.RACKNO,
    }

    console.log(data);

    axios.post(this.state.apiBaseUrl + '/addproduct', data).then((response) => {

      alert("Product Added successfully");
    }).catch((e) => {
      console.log(e);
    });
  }



  backButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      showProductPageForm: false, showProductList: true
    });
  }

  handleChange = (e) => {
    const { id, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  render() {
    return (
      <div>

        {this.state.showaddProductForm ?
          <div>
            <div class="App-header">
              <h1>PharmaBase - Powered by ACCENDERO</h1>
            </div>
            <br></br>

            <div class="sub-header">
              <h5>Add a Product</h5>
            </div>

            <br></br>
            <form>
              <div className="form-group">
                <center>
                  <label>ApplNo : </label>
                  <input type="text"
                    id="ApplNo"
                    size="20"
                    placeholder="ApplNo"
                    value={this.state.ApplNo}
                    onChange={this.handleChange}
                  />
                </center></div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>ProductNo : </label>
                  <input type="text"
                    size="20"
                    id="ProductNo"
                    placeholder="ProductNo"
                    value={this.state.ProductNo}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>Form : </label>
                  <input type="text"
                    size="20"
                    id="Form"
                    placeholder="Form"
                    value={this.state.Form}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>DrugName : </label>
                  <input type="text"
                    size="20"
                    id="DrugName"
                    placeholder="DrugName"
                    value={this.state.DrugName}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>Med_Count : </label>
                  <input type="text"
                    size="20"
                    id="Med_Count"
                    placeholder="Med_Count"
                    value={this.state.Med_Count}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label>RACKNO : </label>
                  <input type="text"
                    size="20"
                    id="RACKNO"
                    placeholder="RACKNO"
                    value={this.state.RACKNO}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div class="button">
                <button type="submit" className="btn btn-primary" onClick={this.addButtonClick}>Submit</button>
              </div>

              <br></br>

              <div class="button">
                <button
                  type="Check Product List" className="btn btn-primary" onClick={this.backButtonClick}>Display Product List</button>
              </div>


            </form>
          </div>

          :
          <div></div>
        }

        {this.state.showProductPageForm ?
          <div><Home></Home></div>

          :
          <div></div>
        }

        {this.state.showProductList ?
          <div><ProductList></ProductList></div>

          :
          <div></div>
        }

      </div>

    );

  }
}
export default AddProduct;