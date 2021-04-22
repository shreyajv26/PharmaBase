import React, { Component, state } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Home from "./productpage.component";



class EditProduct extends Component {

    constructor(props) {

        super(props);
        this.saveButtonClick = this.saveButtonClick.bind();
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

            apiBaseUrl: 'http://localhost:8080',
            showLoginForm: false,
            showProductList: false,
            showeditproductForm: true
        }
    }

    componentDidMount() {

        //let { itemId } = this.props.params;
        console.log("id" + this.props.location.state);
        this.setState({ Item_Id: this.props.location.state });
        console.log("Item_Id" + this.state.Item_Id);
        let id = this.props.location.state;

        axios.get(this.state.apiBaseUrl + '/editproduct/' + id).then((response) => {
            //UserData: response.data;

            this.setState({
                item_id: response.data.itemId,
                rack_no: response.data.rackNo,
                drug_name: response.data.DrugName,
                med_count: response.data.medCount
            });
            const myObjStr = JSON.stringify(response.data);
            console.log("data" + myObjStr);
        }).catch((e) => {
            console.log(e);
        });
        console.log(this.state.UserData);
    }


    saveButtonClick = (e) => {
        e.preventDefault();
        var data = {
            "item_id": this.state.item_id,
            "drug_name": this.state.DrugName,
            "med_count": this.state.Med_Count,
            "rack_no": this.state.RACKNO,
        }

        axios.post(this.state.apiBaseUrl + '/updateproduct/' + this.state.item_id, data).then((response) => {
            alert("Product Updated successfully");
            let path = '/home';
            this.props.history.push(path);
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
                                <label class="required">Item ID : </label>
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
                                <label class="required">Drug Name : </label>
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
                                <label class="required">Med_Count : </label>
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
                                <label class="required">RACKNO : </label>
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
                                <button type="submit" className="btn btn-primary" onClick={this.saveButtonClick}>Save</button>
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

            </div>



        );

    }
}
export default withRouter(EditProduct);