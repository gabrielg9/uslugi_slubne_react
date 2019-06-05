import React, { Component } from 'react';
import axios from 'axios';

export default class EditAttraction extends Component {

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
                <h3 align="center">Update Attraction</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Attraction Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeAttractionName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Attraction Price: </label>
                        <input
                            type="number" min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeAttractionPrize}
                        />
                    </div>
                    <div className="form-group">
                        <label>Attraction Type: </label>
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
                        <input type="submit" value="Update Attraction" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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

    onChangeAttractionAvailability(e) {
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
