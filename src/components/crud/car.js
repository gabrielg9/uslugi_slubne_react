import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import carRead from "./read/carRead";
import addCar from './create/addCar';
import deleteCar from "./delete/deleteCar";
import updateCar from "./update/updateCar";


class car extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Cars</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD/car/readCar" >
                            <Button variant="secondary">Read Cars</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/car/addCar" >
                            <Button variant="secondary">Add new car</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/car/deleteCar" >
                            <Button variant="secondary">Delete car</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/CRUD/car/update" >
                            <Button variant="secondary">Update</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD/car/readCar" exact component={carRead} />
                <Route path="/menu/CRUD/car/addCar" exact component={addCar} />
                <Route path="/menu/CRUD/car/deleteCar" exact component={deleteCar} />
                <Route path="/menu/CRUD/car/update" exact component={updateCar} />
            </Router>
        )
    }
}

export default car;
