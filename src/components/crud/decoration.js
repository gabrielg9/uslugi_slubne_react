import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import decorationRead from "./read/Decoration/decorationRead";
import addDecoration from "./create/Decoration/addDecoration";
import updateDecoration from "./update/Decoration/updateDecoration";
import deleteDecoration from "./delete/Decoration/deleteDecoration";

class decoration extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Decorations</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/decoration/readDecoration" >
                            <Button variant="secondary">Read Decorations</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/decoration/addDecoration" >
                            <Button variant="secondary">Add new decoration</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/decoration/deleteDecoration" >
                            <Button variant="secondary">Delete</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/decoration/update" >
                            <Button variant="secondary">Update</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/decoration/readDecoration" exact component={decorationRead} />
                <Route path="/menu/CRUD/decoration/addDecoration" exact component={addDecoration} />
                <Route path="/menu/CRUD/decoration/deleteDecoration" exact component={deleteDecoration} />
                <Route path="/menu/CRUD/decoration/update" exact component={updateDecoration} />
            </Router>
        )
    }
}

export default decoration;
