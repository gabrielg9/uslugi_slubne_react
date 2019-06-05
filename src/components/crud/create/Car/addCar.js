import React, { Component } from 'react';
import axios from 'axios';
export default class CreateCars extends Component {
    constructor(props) {
        super(props);

        this.onChangeCarName = this.onChangeCarName.bind(this);
        this.onChangeCarPrize = this.onChangeCarPrize.bind(this);
        this.onChangeCarType = this.onChangeCarType.bind(this);
        this.onChangeCarAvailability = this.onChangeCarAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            type: 'car',
            availability: ''
        }
    }
    onChangeCarName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCarPrize(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeCarType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeCarAvailability(e){
        this.setState({
            availability: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Car saved:`);
        console.log(`Car Name: ${this.state.name}`);
        console.log(`Car Price: ${this.state.price}`);
        console.log(`Car Type: ${'car'}`);
        console.log(`Car availability: ${this.state.availability}`);

        const newCar = {
            name: this.state.name,
            price: this.state.price,
            type: 'car',
            availability: this.state.availability
        };

        axios.post('http://localhost:4000/products/add', newCar)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            type: 'car',
            availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeCarName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeCarPrize}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeCarType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Availability: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.availability}
                            onChange={this.onChangeCarAvailability}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Car" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        )
    }
}
