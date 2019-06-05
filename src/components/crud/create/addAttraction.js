import React, { Component } from 'react';
import axios from 'axios';
export default class CreateAttraction extends Component {
    constructor(props) {
        super(props);

        this.onChangeAttractionName = this.onChangeAttractionName.bind(this);
        this.onChangeAttractionPrize = this.onChangeAttractionPrize.bind(this);
        this.onChangeAttractionType = this.onChangeAttractionType.bind(this);
        this.onChangeAttractionAvailability = this.onChangeAttractionAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            type: 'attractions',
            availability: ''
        }
    }
    onChangeAttractionName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAttractionPrize(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeAttractionType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeAttractionAvailability(e){
        this.setState({
            availability: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Attraction saved:`);
        console.log(`Attraction Name: ${this.state.name}`);
        console.log(`Attraction Price: ${this.state.price}`);
        console.log(`Attraction Type: ${'attractions'}`);
        console.log(`Attraction availability: ${this.state.availability}`);

        const newAttraction = {
            name: this.state.name,
            price: this.state.price,
            type: 'attractions',
            availability: this.state.availability
        };

        axios.post('http://localhost:4000/products/add', newAttraction)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            type: 'attractions',
            availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Attraction</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeAttractionName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeAttractionPrize}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeAttractionType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Availability: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.availability}
                            onChange={this.onChangeAttractionAvailability}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Attraction" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        )
    }
}
