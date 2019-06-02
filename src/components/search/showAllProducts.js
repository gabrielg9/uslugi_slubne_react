import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cars = props => (
    <tr>
        <td>{props.car.name}</td>
        <td>{props.car.price}</td>
        <td>{props.car.type}</td>
        <td>{props.car.availability}</td>

    </tr>
)

class productsRead extends Component{
    constructor(props) {
        super(props);
        this.state = {cars: []};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const car={
            type:this.state.type
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
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
            <div>
                <h3>List of products</h3>
                <table className="table table-bordered" style={{ marginTop: 20 }} >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.carList() }
                    </tbody>
                </table>
            </div>
        )
    }

}


export default productsRead;
