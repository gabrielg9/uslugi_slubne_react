import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import dressRead from "./read/Dress/dressRead";
import addDress from "./create/Dress/addDress";
import updateDress from "./update/Dress/updateDress";
import deleteDress from "./delete/Dress/deleteDress";

class dress extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Dresses</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/dress/readDress" >
                            <Button variant="secondary">Read Dresses</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/dress/addDress" >
                            <Button variant="secondary">Add new dress</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/dress/deleteDress" >
                            <Button variant="secondary">Delete</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/dress/update" >
                            <Button variant="secondary">Update</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/dress/readDress" exact component={dressRead} />
                <Route path="/menu/CRUD/dress/addDress" exact component={addDress} />
                <Route path="/menu/CRUD/dress/deleteDress" exact component={deleteDress} />
                <Route path="/menu/CRUD/dress/update" exact component={updateDress} />
            </Router>
        )
    }
}

export default dress;
