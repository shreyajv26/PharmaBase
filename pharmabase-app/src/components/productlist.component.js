import React, { Component, state } from 'react';
import axios from 'axios';
import Home from "./productpage.component";



class ProductList extends Component {

  constructor(props) {

    super(props);
    //this.showProductHandle = this.showProductHandle.bind();
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
      UserData: [
        { appl_no: "Pete Hunt", appl_no: "This is one comment" },
        { appl_no: "Jordan Walke", appl_no: "This is *another* comment" }
      ]
    }
  }



  componentDidMount() {
    //fetch('http://veomit.com/test/zend/api/fetch.php')
    /* axios.get(this.state.apiBaseUrl + '/listproduct')
       .then(response => {
         return response.json();
       })
       .then(result => {
         this.setState({
           UserData: result
         });
 
       });*/

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

        <h5>Product List</h5>
        <div className="App">
          <table border='2' align='center'>
            <tbody>

              {

                this.state.UserData.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td>{data.appl_no}</td>
                      <td>{data.product_no}</td>
                      <td><button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.addButtonClick} >
                        Edit
          </button></td>
                    </tr>
                  );
                })
              }

            </tbody>
          </table>
        </div>




      </div>

    );

  }
}
export default ProductList;