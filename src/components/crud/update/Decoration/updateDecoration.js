import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import updateThisDecoration from "./updateThisDecoration";

const Decoration = props => (
    <tr>
        <td>{props.decoration.name}</td>
        <td>{props.decoration.price}</td>
        <td>{props.decoration.type}</td>
        <td>{props.decoration.availability}</td>
        <td>
            <Link to={"/menu/CRUD/decoration/update/"+props.decoration._id}>Update</Link>
        </td>

    </tr>
)

class updateDecoration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:'decoration',
            decorations: []};
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
        return this.state.decorations.map(function(currentDecoration, i){
            return <Decoration decoration={currentDecoration} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Select decoration to update</h3>
                    <table className="table table-bordered" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Availability</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.decorationList() }
                        </tbody>
                    </table>

                </div>

                <Route path="/menu/CRUD/decoration/update/:id" exact component={updateThisDecoration} />
            </Router>
        )
    }

}

export default updateDecoration;
