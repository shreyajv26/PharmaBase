import React, { Component, state } from 'react';
import axios from 'axios';
import Home from "./productpage.component";



class EditProduct extends Component {

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


    handleChange = (e) => {
        const { id, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    render() {
        return (
            <tbody id="cursorPointer">

                {  this.state.UserData.map((item, key) => {
                    const editField = (value, index) => {
                        // Clone UserData data before mutation
                        const UserData = this.state.UserData.map(item => ({ ...item }))
                        // Update field by index of current student
                        UserData[key][index] = value
                        // Trigger re-render
                        this.setState({ UserData })
                    }
                    return (
                        <tr key={key} className={item.editing ? 'editing' : ''} onClick={() => {
                            // Clone UserData data before mutation
                            const UserData = this.state.UserData.map(i => ({ ...i, editing: item.editing && i === item }))
                            // Toggle editing flag of this current student (ie table row)
                            UserData[key].editing = true;
                            // Trigger re-render
                            this.setState({
                                UserData
                            })
                        }
                        }>
                            <td>{item.editing ? <input value={item[1]} onChange={e => editField(e.target.value, 1)} /> : <span>{item[1]}</span>}</td>
                            <td>{item.editing ? <input value={item[2]} onChange={e => editField(e.target.value, 2)} /> : <span>{item[2]}</span>}</td>
                            <td>{item.editing ? <input value={item[3]} onChange={e => editField(e.target.value, 3)} /> : <span>{item[3]}</span>}</td>
                            <td>{item.editing ? <input value={item[4]} onChange={e => editField(e.target.value, 4)} /> : <span>{item[4]}</span>}</td>
                        </tr>)
                })
                }

            </tbody>

        );

    }
}
export default EditProduct;