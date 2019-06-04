import React, { Component } from 'react';
import axios from "axios";

class addComment extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePostedDate = this.onChangePostedDate.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userId: '',
            postedDate: Date.now(),
            body: '',
        }
    }

    onChangeUserId(e) {
        this.setState({
            userId: e.target.value
        });
    }

    onChangePostedDate(e) {
        this.setState({
            postedDate: e.target.value
        });
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Comment saved:`);
        console.log(`userId: ${this.state.userId}`);
        console.log(`Date: ${Date.now()}`);
        console.log(`Body: ${this.state.body}`);

        const newComment = {
            userId: this.state.userId,
            postedDate: Date.now(),
            body: this.state.body,

        };

        axios.post('http://localhost:4001/comments/add', newComment)
            .then(res => console.log(res.data));

        this.setState({
            userId: '',
            postedDate: Date.now(),
            body: '',
        })
    }



    render() {
        return (

            <div>
                <p>Please add a comment</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UserId: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.userId}
                                onChange={this.onChangeUserId}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <input
                            type="Date"
                            className="form-control"
                            value={this.state.postedDate}
                            onChange={this.onChangePostedDate}
                        />
                    </div>

                    <div className="form-group">
                        <label>Body: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.body}
                            onChange={this.onChangeBody}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Create Comment" className="btn btn-dark" />
                    </div>
                </form>
            </div>


        )
    }
}

export default addComment;
