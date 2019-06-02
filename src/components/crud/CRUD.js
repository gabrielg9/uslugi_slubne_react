import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import car from "./car";
import suit from "./suit";
import dress from "./dress";
import decoration from "./decoration";
import attraction from "./attraction";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class CRUD extends Component {
    render() {
        return (
            <Router>
                <div>
                    <p>You chose CRUD</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/car" >
                            <Button type="primary">Cars</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/suit" >
                            <Button type="primary">Suits</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/dress" >
                            <Button type="primary">Dresses</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/decoration" >
                            <Button type="primary">Decorations</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/attraction" >
                            <Button type="primary">Attractions</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/car" exact component={car} />
                <Route path="/menu/CRUD/suit" exact component={suit} />
                <Route path="/menu/CRUD/dress" exact component={dress} />
                <Route path="/menu/CRUD/decoration" exact component={decoration} />
                <Route path="/menu/CRUD/attraction" exact component={attraction} />
            </Router>
        )
    }
}

export default CRUD;