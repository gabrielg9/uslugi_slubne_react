import React, { Component } from 'react';
import axios from 'axios'

export default class Cars extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type:'car',
            data: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        const car = {
            type: this.state.type

        }

        findCar(car).then(res => {
            //console.log(res)
            this.setState({data: res})
        })

    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" >

                    <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="submit" value="Find cars" className="btn btn-primary" />
                    </div>

                    <div>
                        <ul>
                            <table className="table table-bordered" style={{ marginTop: 20 }} >
                                <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Type</td>
                                    <td>Availability</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(el => (
                                    <tr>
                                        <td>{el.name}</td>
                                        <td>{el.price}</td>
                                        <td>{el.type}</td>
                                        <td>{el.availability}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </form>
            </div>
        );
    }
}
export const findCar = car => {
    return axios
        .post('http://localhost:4000/products/type', {
            type: car.type
        })
        .then(res => {
            return res.data
        })
        .catch(function (error){
            console.log(error);
        })
}
