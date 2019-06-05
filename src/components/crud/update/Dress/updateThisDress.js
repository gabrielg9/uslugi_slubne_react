import React, { Component } from 'react';
import axios from 'axios';

export default class EditDress extends Component {

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
                <h3 align="center">Update Dress</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Dress Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeDressName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Dress Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeDressPrize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Dress Type: </label>
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
                        <input type="submit" value="Update Dress" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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

    onChangeDressAvailability(e) {
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
