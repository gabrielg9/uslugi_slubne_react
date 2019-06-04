import React, { Component } from 'react';
import axios from 'axios';

const Suits = props => (
    <tr>
        <td>{props.suit.name}</td>
        <td>{props.suit.price}</td>
        <td>{props.suit.type}</td>
        <td>{props.suit.availability}</td>
    </tr>
)

class suitRead extends Component{
    constructor(props) {
        super(props);
        this.state = {suits: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'suit'})
            .then(response => {
                this.setState({ suits: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    suitList() {
        return this.state.suits.map(function(currentSuit, i){
            return <Suits suit={currentSuit} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>List of availability suits</h3>
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
                    {this.suitList()}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default suitRead;
