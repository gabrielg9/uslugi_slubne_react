import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import updateThisSuit from "./updateThisSuit";

const Suits = props => (
    <tr>
        <td>{props.suit.name}</td>
        <td>{props.suit.price}</td>
        <td>{props.suit.type}</td>
        <td>{props.suit.availability}</td>
        <td>
            <Link to={"/menu/CRUD/suit/update/"+props.suit._id}>Update</Link>
        </td>

    </tr>
)

class suitDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:'car',
            suits: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'suit'})
            .then(response => {
                this.setState({ suits: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    suitList() {
        return this.state.suits.map(function(currentSuit, i){
            return <Suits suit={currentSuit} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Select suit to update</h3>
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
                        { this.suitList() }
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/suit/update/:id" exact component={updateThisSuit} />
            </Router>
        )
    }

}

export default suitDelete;
