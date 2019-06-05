import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import attractionRead from "./read/attractionRead";
import addAttraction from "./create/addAttraction";
import updateAttraction from "./update/updateAttraction";
import deleteAttraction from "./delete/deleteAttraction";

class attraction extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Attractions</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/attraction/readAttraction" >
                            <Button variant="secondary">Read Attractions</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/attraction/addAttraction" >
                            <Button variant="secondary">Add new attraction</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/attraction/deleteAttraction" >
                            <Button variant="secondary">Delete</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/attraction/update" >
                            <Button variant="secondary">Update</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/attraction/readAttraction" exact component={attractionRead} />
                <Route path="/menu/CRUD/attraction/addAttraction" exact component={addAttraction} />
                <Route path="/menu/CRUD/attraction/deleteAttraction" exact component={deleteAttraction} />
                <Route path="/menu/CRUD/attraction/update" exact component={updateAttraction} />
            </Router>
        )
    }
}

export default attraction;
