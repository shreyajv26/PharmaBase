import React, { Component, state } from 'react';
import axios from 'axios';



class EditProduct extends Component {

    constructor(props) {

        super(props);
        this.saveButtonClick = this.saveButtonClick.bind();
        this.state = {
            Item_Id: '',
            DrugName: '',
            Med_Count: '',
            RACKNO: '',

            apiBaseUrl: "http://localhost:8080",
            showLoginForm: false,
            showProductList: false,
            showeditproductForm: true
        }
    }

    saveButtonClick = (e) => {
        e.preventDefault();
        var data = {
            "item-id": this.state.Item_Id,
            "drug_name": this.state.DrugName,
            "med_count": this.state.Med_Count,
            "rack_no": this.state.RACKNO,
        }

        console.log(data);

        axios.post(this.state.apiBaseUrl + '/editproduct', data).then((response) => {
            alert("Product Edited successfully");
            

        }).catch((e) => {
            console.log(e);
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

                {this.state.showeditproductForm ?
                    <div>
                        <div class="App-header">
                            <h1>PharmaBase - Powered by ACCENDERO</h1>
                        </div>
                        <br></br>

                        <div class="sub-header">
                            <h5>Edit a Product</h5>
                        </div>

                        <br></br>
                        <form>

                            <br></br>

                            <div className="form-group">
                                <center>
                                    <label>Item ID : </label>
                                    <input type="text"
                                        size="20"
                                        id="item_id"
                                        placeholder="item_id"
                                        value={this.state.item_id}
                                        onChange={this.handleChange}

                                    />
                                </center>
                            </div>

                            <br></br>

                            <div className="form-group">
                                <center>
                                    <label>Drug Name : </label>
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
                                <button type="submit" className="btn btn-primary"onClick={this.saveButtonClick}>Save</button>
                            </div>
                        </form>
                    </div>

                    :
                    <div></div>
                }

                

            </div>

        );

    }
}
export default EditProduct;