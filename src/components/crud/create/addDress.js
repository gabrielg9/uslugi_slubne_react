import React, { Component } from 'react';
import axios from 'axios';
export default class CreateDress extends Component {
    constructor(props) {
        super(props);

        this.onChangeDressName = this.onChangeDressName.bind(this);
        this.onChangeDressPrize = this.onChangeDressPrize.bind(this);
        this.onChangeDressType = this.onChangeDressType.bind(this);
        this.onChangeDressAvailability = this.onChangeDressAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            type: 'dress',
            availability: ''
        }
    }
    onChangeDressName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDressPrize(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeDressType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeDressAvailability(e){
        this.setState({
            availability: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Dress saved:`);
        console.log(`Dress Name: ${this.state.name}`);
        console.log(`Dress Price: ${this.state.price}`);
        console.log(`Dress Type: ${'dress'}`);
        console.log(`Dress availability: ${this.state.availability}`);

        const newDress = {
            name: this.state.name,
            price: this.state.price,
            type: 'dress',
            availability: this.state.availability
        };

        axios.post('http://localhost:4000/products/add', newDress)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            type: 'dress',
            availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Dress</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeDressName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeDressPrize}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeDressType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Availability: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.availability}
                            onChange={this.onChangeDressAvailability}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Dress" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        )
    }
}
