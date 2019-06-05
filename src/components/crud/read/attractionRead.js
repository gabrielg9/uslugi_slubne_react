import React, { Component } from 'react';
import axios from 'axios';

const Attractions = props => (
    <tr>
        <td>{props.attraction.name}</td>
        <td>{props.attraction.price}</td>
        <td>{props.attraction.type}</td>
        <td>{props.attraction.availability}</td>
    </tr>
)

class attractionRead extends Component{
    constructor(props) {
        super(props);
        this.state = {attractions: []};
    }

    componentDidMount() {
        axios.post('http://localhost:4000/products/type',{type:'attractions'})
            .then(response => {
                this.setState({ attractions: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    attractionList() {
        return this.state.attractions.map(function(currentAttractions, i){
            return <Attractions attraction={currentAttractions} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>List of availability attractions</h3>
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
                    {this.attractionList()}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default attractionRead;
