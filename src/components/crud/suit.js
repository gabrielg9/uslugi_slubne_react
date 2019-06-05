import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import suitRead from "./read/Suit/suitRead";
import addSuit from "./create/Suit/addSuit";
import updateSuit from "./update/Suit/updateSuit";
import deleteSuit from "./delete/Suit/deleteSuit";

class suit extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Suits</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/suit/readSuit" >
                            <Button variant="secondary">Read Suits</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/suit/addSuit" >
                            <Button variant="secondary">Add new suit</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/suit/deleteSuit" >
                            <Button variant="secondary">Delete</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/suit/update" >
                            <Button variant="secondary">Update</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/suit/readSuit" exact component={suitRead} />
                <Route path="/menu/CRUD/suit/addSuit" exact component={addSuit} />
                <Route path="/menu/CRUD/suit/deleteSuit" exact component={deleteSuit} />
                <Route path="/menu/CRUD/suit/update" exact component={updateSuit} />
            </Router>
        )
    }
}

export default suit;
