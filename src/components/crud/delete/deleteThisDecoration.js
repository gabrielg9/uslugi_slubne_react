import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteDecoration extends Component {

    constructor(props) {
        super(props);

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
                    availability: response.data.availability,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (

            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                <form onSubmit={this.onSubmit}>
                    <p style={{ color: 'red' }}>Delete "{this.state.name}"?</p>
                    <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="submit" value="Delete this decoration" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
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
        axios.delete('http://localhost:4000/products/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/menu/CRUD/decoration');
    }





}
