import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import deleteThisAttraction from "./deleteThisAttraction";

const Attraction = props => (
    <tr>
        <td>{props.attraction.name}</td>
        <td>{props.attraction.price}</td>
        <td>{props.attraction.type}</td>
        <td>{props.attraction.availability}</td>
        <td>
            <Link to={"/menu/CRUD/attraction/deleteAttraction/"+props.attraction._id}>Delete</Link>
        </td>

    </tr>
)

class attractionDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {attractions: []};
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
                    <h3>Select attraction to delete</h3>
                    <table className="table table-bordered" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Availability</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.attractionList()}
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/attraction/deleteAttraction/:id" exact component={deleteThisAttraction} />
            </Router>
        )
    }

}

export default attractionDelete;
