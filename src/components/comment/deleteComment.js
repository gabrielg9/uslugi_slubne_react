import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import deleteThisComment from "./deleteThisComment";

const Comments = props => (
    <tr>
        <td>{props.comment.userId}</td>
        <td>{props.comment.postedDate}</td>
        <td>{props.comment.body}</td>
        <td>
            <Link to={"/menu/comment/delete/"+props.comment._id}>Delete</Link>
        </td>
    </tr>
)

class productsRead extends Component{
    constructor(props) {
        super(props);
        this.state = {comments: []};
        this.handleChange=this.handleChange.bind(this);
        //this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    /*handleSubmit(e){
        e.preventDefault();
        const car={
            type:this.state.type
        }

    }*/

    componentDidMount() {
        axios.get('http://localhost:4001/comments/')
            .then(response => {
                this.setState({ comments: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    commentList() {
        return this.state.comments.map(function(currentComment, i){
            return <Comments comment={currentComment} key={i} />;
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Comments </h3>
                    <table className="table table-bordered" style={{ marginTop: 20 }} >
                        <thead>
                        <tr>
                            <th>From</th>
                            <th>Date</th>
                            <th>Body</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.commentList() }
                        </tbody>
                    </table>
                </div>
                    <Route path="/menu/comment/delete/:id" exact component={deleteThisComment} />
            </Router>
        )
    }

}


export default productsRead;
