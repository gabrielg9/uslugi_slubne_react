import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from "antd/lib/button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import addComment from "./addComment";
import deleteComment from "./deleteComment";
import showComments from "./showComments";

class comment extends Component {
    render() {
        return (
            <Router>

                <div>
                    <p>You chose Comments</p>
                </div>

                <ButtonToolbar>
                    <li className="nav-link">
                        <Link to="/menu/comment/show" >
                            <Button type="primary">Show Comments</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/comment/add" >
                            <Button type="primary">Add Comment</Button>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/menu/comment/delete" >
                            <Button type="primary">Delete Comment</Button>
                        </Link>
                    </li>
                </ButtonToolbar>

                <Route path="/menu/comment/show" exact component={showComments} />
                <Route path="/menu/comment/add" exact component={addComment} />
                <Route path="/menu/comment/delete" exact component={deleteComment} />
            </Router>
        )
    }
}

export default comment;
