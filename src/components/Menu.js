import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from "antd/lib/button";
import "bootstrap/dist/css/bootstrap.min.css";
import CRUD from "./crud/CRUD";
import comment from './comment/comment';
import Sort from "./sort/Sort";
import Search from "./search/Search";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class Menu extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>Please choose your option</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/CRUD" >
                    <Button >CRUD</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/comment" >
                            <Button >Comments</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/sort" >
                            <Button >Sort</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/search" >
                            <Button >Search</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/CRUD" exact component={CRUD} />
                <Route path="/menu/comment" exact component={comment} />
                <Route path="/menu/sort" exact component={Sort} />
                <Route path="/menu/search" exact component={Search} />
            </Router>
        )
    }
}

export default Menu;