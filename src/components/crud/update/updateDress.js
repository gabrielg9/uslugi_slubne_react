import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import updateThisDress from "./updateThisDress";

const Dress = props => (
    <tr>
        <td>{props.dress.name}</td>
        <td>{props.dress.price}</td>
        <td>{props.dress.type}</td>
        <td>{props.dress.availability}</td>
        <td>
            <Link to={"/menu/CRUD/dress/update/"+props.dress._id}>Update</Link>
        </td>

    </tr>
)

class dressDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:'dress',
            dresses: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'dress'})
            .then(response => {
                this.setState({ dresses: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    dressList() {
        return this.state.dresses.map(function(currentDress, i){
            return <Dress dress={currentDress} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Select dress to update</h3>
                    <table className="table table-bordered" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Availability</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.dressList() }
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/dress/update/:id" exact component={updateThisDress} />
            </Router>
        )
    }

}

export default dressDelete;
