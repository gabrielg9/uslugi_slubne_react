import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import updateThisAttraction from "./updateThisAttraction";

const Attraction = props => (
    <tr>
        <td>{props.attraction.name}</td>
        <td>{props.attraction.price}</td>
        <td>{props.attraction.type}</td>
        <td>{props.attraction.availability}</td>
        <td>
            <Link to={"/menu/CRUD/attraction/update/"+props.attraction._id}>Update</Link>
        </td>

    </tr>
)

class updateAttraction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:'decoration',
            attractions: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'attractions'})
            .then(response => {
                this.setState({ attractions: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    attractionList() {
        return this.state.attractions.map(function(currentAttraction, i){
            return <Attraction attraction={currentAttraction} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Select attraction to update</h3>
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
                        { this.attractionList() }
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/attraction/update/:id" exact component={updateThisAttraction} />
            </Router>
        )
    }

}

export default updateAttraction;
