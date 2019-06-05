import React, { Component } from 'react';
import axios from 'axios';

export default class EditSuit extends Component {

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
            type: '',
            availability: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    price: response.data.price,
                    type: response.data.type,
                    availability: response.data.availability
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Suit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Suit Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeSuitName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Suit Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeSuitPrize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Suit Type: </label>
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
                        <input type="submit" value="Update Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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

    onChangeSuitAvailability(e) {
        this.setState({
            availability: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            price: this.state.price,
            type: this.state.type,
            availability: this.state.availability
        };
        console.log(obj);
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


}
