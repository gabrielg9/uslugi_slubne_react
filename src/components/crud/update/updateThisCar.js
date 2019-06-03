import React, { Component } from 'react';
import axios from 'axios';

export default class EditCar extends Component {

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
                <h3 align="center">Update Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Car Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeCarName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Car Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeCarPrize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Car Type: </label>
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
                        <input type="submit" value="Update Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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

    onChangeCarAvailability(e) {
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
