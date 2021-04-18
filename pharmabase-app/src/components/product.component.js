import React, { Component,state , useState, setState} from 'react';
import axios from 'axios';
/*import PharmaDataService from "../services/pharma.service";*/
//import Sign from '../title';

class ProductForm extends Component {

    constructor(props) {

        super(props);
        this.handleSubmitClick=this.handleSubmitClick.bind();
        this.handleChange=this.handleChange.bind();
        this.state = {
          ApplNo :' ',
          ProductNo :' ',
          Form :' ', 
          Strength :' ',
          ReferenceDrug :' ',
          DrugName :' ',
          ActiveIngredient :' ',
          ReferenceStandard :' ',
          Med_Count :' ',
          RACKNO :' ',

          apiBaseUrl: "http://localhost:8080",
          showLoginForm:false,
          showProductList:false,
          showSignUpForm:true
        }
      }
    
       handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }));
      }
    
      handleSubmitClick = (e) => {
        e.preventDefault();
    
        var data = {
          "ProductNo": this.state.ProductNo,
          "DrugName": this.state.DrugName,
          "Med_Count": this.state.Med_Count,
          "RACKNO": this.state.RACKNO
    
        }
      
        axios.post(this.state.apiBaseUrl + '/product', data).then(function (response) {
    
          console.log(response);
    
          if (response.data.success) {
    
            console.log("Product Added successfull");
            alert("Product Added successfully");
    
          } else {
    
            alert("Product addition  failed");
    
          }
    
        }).catch(function (error) {
    
          console.log(error);
    
        });
      }


    render() {
        return (
            <div>
              <h1>PharmaBase - Powered by ACCENDERO</h1>
              <h5>Add Product</h5>
              <input type="text"
                id="ProductNo"
                size="15"
                placeholder="Product No"
                value={this.state.ProductNo}
                onChange={this.handleChange} 
              />
      <br></br>
      <br></br>
              <input type="text"
                id="DrugName"
                size="15"
                placeholder="Drug Name"
                value={this.state.DrugName}
                onChange={this.handleChange} 
               
              />
        <br></br>
        <br></br>
              <input type="text"
                id="Med_Count"
                size="15"
                id="Med_Count"
                placeholder="Med_Count"
                value={this.state.Med_Count}
                onChange={this.handleChange} 
               
              />
        <br></br>
        <br></br>
              <input type="text"
                id="RACKNO"
                size="15"
                id="RACKNO"
                placeholder="RACKNO"
                value={this.state.RACKNO}
                onChange={this.handleChange} 
               
              />
        <br></br>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmitClick} 
              >
                Add Product
                </button>
            </div>
          );
        }
    }

export default ProductForm;