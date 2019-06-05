import React, { Component } from 'react';
import axios from 'axios';

export default class EditDecoration extends Component {

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
                <h3 align="center">Update Decoration</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Decoration Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeDecorationName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Decoration Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeDecorationPrize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Decoration Type: </label>
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
                        <input type="submit" value="Update Decoration" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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

    onChangeDecorationAvailability(e) {
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
