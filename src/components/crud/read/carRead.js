import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {findCar} from "./findCars";


const Cars = props => (
    <tr>
        <td>{props.car.name}</td>
        <td>{props.car.price}</td>
        <td>{props.car.type}</td>
        <td>{props.car.availability}</td>

    </tr>
)


class productsRead extends Component{
    constructor() {
        super();
        this.state = {
            cars: [],
            type: 'car'
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    updateSearch(e){
        this.setState({search:e.target.value.substr(0,20)});
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const car={
            type:this.state.type
        }
        findCar(car).then(res=>{
            this.setState({cars:res})
        })

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
            <div className="FormCenter">

                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                    </div>
                    <div className="FormField">
                        <button  className="FormField__Button mr-20">SZUKAJ</button>
                    </div>
                    <div>
                        <ul>

                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Type</td>
                                    <td>Availability</td>
                                </tr>


                                <tr>
                                    <td>{this.state.cars.name}</td>
                                    <td>{this.state.cars.price}</td>
                                    <td>{this.state.cars.type}</td>
                                    <td>{this.state.cars.availability}</td>
                                </tr>

                            </table>

                        </ul>
                    </div>
                </form>
            </div>
        );
    }

}


export default productsRead;
