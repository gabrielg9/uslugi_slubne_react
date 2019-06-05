import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import deleteThisCar from "./deleteThisCar";

const Cars = props => (
    <tr>
        <td>{props.car.name}</td>
        <td>{props.car.price}</td>
        <td>{props.car.type}</td>
        <td>{props.car.availability}</td>
        <td>
            <Link to={"/menu/CRUD/car/deleteCar/"+props.car._id}>Delete</Link>
        </td>

    </tr>
)

class carDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {cars: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'car'})
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    carList() {
        return this.state.cars.map(function(currentCar, i){
            return <Cars car={currentCar} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Select car to delete</h3>
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
                        { this.carList() }
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/car/deleteCar/:id" exact component={deleteThisCar} />
            </Router>
        )
    }

}

export default carDelete;
