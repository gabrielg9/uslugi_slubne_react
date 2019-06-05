import React, { Component } from 'react';
import axios from 'axios';

const Dresses = props => (
    <tr>
        <td>{props.dress.name}</td>
        <td>{props.dress.price}</td>
        <td>{props.dress.type}</td>
        <td>{props.dress.availability}</td>
    </tr>
)

class dressRead extends Component{
    constructor(props) {
        super(props);
        this.state = {dress: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'dress'})
            .then(response => {
                this.setState({ dress: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    dressList() {
        return this.state.dress.map(function(currentDress, i){
            return <Dresses dress={currentDress} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>List of availability dresses</h3>
                <table className="table table-bordered" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.dressList()}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default dressRead;
