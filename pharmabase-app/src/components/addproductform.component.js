import React, { Component, state } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Home from "./productpage.component";
import ProductList from "./productlist.component";



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
    axios.post(this.state.apiBaseUrl + '/addproduct', data).then((response) => {
      alert("Product Added successfully");
      let path = '/home';
      this.props.history.push(path);
    });
  }

  backButtonClick = (e) => {
    e.preventDefault();
    let path = '/listproduct';
    this.props.history.push(path);
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
                  <label class="required">ApplNo : </label>
                  <input type="text"
                    id="ApplNo"
                    size="30"
                    placeholder="ApplNo (Numbers Only)"
                    value={this.state.ApplNo}
                    onChange={this.handleChange}
                  />
                </center></div>

              <br></br>

              <div className="form-group">
                <center>
                  <label class="required">ProductNo : </label>
                  <input type="text"
                    size="30"
                    id="ProductNo"
                    placeholder="ProductNo (Numbers Only) "
                    value={this.state.ProductNo}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label class="required">Form : </label>
                  <input type="text"
                    size="30"
                    id="Form"
                    placeholder="Form (Alphabets Only)"
                    value={this.state.Form}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label class="required">DrugName : </label>
                  <input type="text"
                    size="30"
                    id="DrugName"
                    placeholder="DrugName (Alphabets Only)"
                    value={this.state.DrugName}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label class="required">Med_Count : </label>
                  <input type="text"
                    size="30"
                    id="Med_Count"
                    placeholder="Med_Count (Numbers Only)"
                    value={this.state.Med_Count}
                    onChange={this.handleChange}

                  />
                </center>
              </div>

              <br></br>

              <div className="form-group">
                <center>
                  <label class="required">RACKNO : </label>
                  <input type="text"
                    size="30"
                    id="RACKNO"
                    placeholder="RACKNO (Numbers Only)"
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
export default withRouter(AddProduct);