import React, { Component } from 'react';
import axios from 'axios';
export default class CreateDecorations extends Component {
    constructor(props) {
        super(props);

        this.onChangeDecorationName = this.onChangeDecorationName.bind(this);
        this.onChangeDecorationPrize = this.onChangeDecorationPrize.bind(this);
        this.onChangeDecorationType = this.onChangeDecorationType.bind(this);
        this.onChangeDecorationAvailability = this.onChangeDecorationAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            type: 'decoration',
            availability: ''
        }
    }
    onChangeDecorationName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDecorationPrize(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeDecorationType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeDecorationAvailability(e){
        this.setState({
            availability: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Decoration saved:`);
        console.log(`Decoration Name: ${this.state.name}`);
        console.log(`Decoration Price: ${this.state.price}`);
        console.log(`Decoration Type: ${'decoration'}`);
        console.log(`Decoration availability: ${this.state.availability}`);

        const newDecoration = {
            name: this.state.name,
            price: this.state.price,
            type: 'decoration',
            availability: this.state.availability
        };

        axios.post('http://localhost:4000/products/add', newDecoration)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: '',
            type: 'decoration',
            availability: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Decoration</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeDecorationName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeDecorationPrize}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeDecorationType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Availability: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.availability}
                            onChange={this.onChangeDecorationAvailability}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Decoration" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        )
    }
}
