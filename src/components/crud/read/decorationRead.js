import React, { Component } from 'react';
import axios from 'axios';

const Decorations = props => (
    <tr>
        <td>{props.decoration.name}</td>
        <td>{props.decoration.price}</td>
        <td>{props.decoration.type}</td>
        <td>{props.decoration.availability}</td>
    </tr>
)

class decorationRead extends Component{
    constructor(props) {
        super(props);
        this.state = {decorations: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'decoration'})
            .then(response => {
                this.setState({ decorations: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    decorationList() {
        return this.state.decorations.map(function(currentDecorations, i){
            return <Decorations decoration={currentDecorations} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>List of availability decorations</h3>
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
                    {this.decorationList()}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default decorationRead;
