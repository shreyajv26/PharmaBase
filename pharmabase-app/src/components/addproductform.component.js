import React, { Component,state } from 'react';
import axios from 'axios';
import Home from "./productpage.component";



class AddProduct extends Component {

  constructor(props) {

    super(props);
        this.addButtonClick=this.addButtonClick.bind();
        this.state = {
          ApplNo :'',
          ProductNo :'',
          Form :'', 
          Strength :'',
          ReferenceDrug :'',
          DrugName :'',
          ActiveIngredient :'',
          ReferenceStandard :'',
          Med_Count :'',
          RACKNO :'',

          apiBaseUrl: "http://localhost:8080",
          showLoginForm:false,
          showProductList:false,
          showSignUpForm:true
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
  
    axios.post(this.state.apiBaseUrl + '/addproduct', data).then((response)=> {
       /*this.setState({showHomePage:false,
                       showAddproductForm: false,
                       showProductPageForm: true
                      
    });*/
    alert("Product tAdded successfully");
    }).catch((e) => {
      console.log(e);
    });
  }

  handleChange = (e) => {
    const {id , value} = e.target   
    this.setState(prevState => ({
        ...prevState,
        [id] : value
    }));
  }

  render() {
    return (
      <div>
         
       
        <div>
        
        <h5>Add a Product</h5>
        <br></br>
        <h11>ApplNo : </h11>
        <input type="text"
          id="ApplNo"
          size="20"
          placeholder="ApplNo"
          value={this.state.ApplNo}
          onChange={this.handleChange} 
        />
        <br></br>

        <h11>ProductNo : </h11>
        <input type="text"
          size="20"
          id="ProductNo"
          placeholder="ProductNo"
          value={this.state.ProductNo}
          onChange={this.handleChange} 
         
        />
        <br></br>

        <h11>Form : </h11>
        <input type="text"
          size="20"
          id="Form"
          placeholder="Form"
          value={this.state.Form}
          onChange={this.handleChange} 
         
        />
        <br></br>

        <h11>DrugName : </h11>
        <input type="text"
          size="20"
          id="DrugName"
          placeholder="DrugName"
          value={this.state.DrugName}
          onChange={this.handleChange} 
         
        />
        <br></br>

        <h11>Med_Count : </h11>
        <input type="text"
          size="20"
          id="Med_Count"
          placeholder="Med_Count"
          value={this.state.Med_Count}
          onChange={this.handleChange} 
         
        />
        <br></br>

        <h11>RACKNO : </h11>
        <input type="text"
          size="20"
          id="RACKNO"
          placeholder="RACKNO"
          value={this.state.RACKNO}
          onChange={this.handleChange} 
         
        />
        <br></br>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.addButtonClick}
          
        >
          Submit
          </button>
          </div>
         


        {this.state.showProductPageForm ? 
          <div><Home></Home></div>
          
          :
          <div></div>
        }

      </div>
        
    );
  
  }
}
export default AddProduct;