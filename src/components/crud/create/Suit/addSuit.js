import React, { Component } from 'react';
import axios from 'axios';
export default class CreateSuits extends Component {
    constructor(props) {
        super(props);

        this.onChangeSuitName = this.onChangeSuitName.bind(this);
        this.onChangeSuitPrize = this.onChangeSuitPrize.bind(this);
        this.onChangeSuitType = this.onChangeSuitType.bind(this);
        this.onChangeSuitAvailability = this.onChangeSuitAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            type: 'suit',
            availability: ''
        }
    }
    onChangeSuitName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSuitPrize(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeSuitType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeSuitAvailability(e){
        this.setState({
            availability: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Suit saved:`);
        console.log(`Suit Name: ${this.state.name}`);
        console.log(`Suit Price: ${this.state.price}`);
        console.log(`Suit Type: ${'suit'}`);
        console.log(`Suit availability: ${this.state.availability}`);

        const newSuit = {
            name: this.state.name,
            price: this.state.price,
            type: 'suit',
            availability: this.state.availability
        };

        axios.post('http://localhost:4000/products/add', newSuit)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            type: 'suit',
            availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Suit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeSuitName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeSuitPrize}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeSuitType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Availability: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.availability}
                            onChange={this.onChangeSuitAvailability}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Suit" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        )
    }
}
