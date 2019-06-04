import React, { Component } from 'react';
import axios from 'axios';

export default class deleteThisComment extends Component{
    constructor(props) {
        // noinspection JSAnnotator
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userId: '',
            postedDate: Date.now(),
            body: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4001/comments/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    userId: response.data.userId,
                    postedDate: response.data.postedDate,
                    body: response.data.body,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (

            <div style={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                <form onSubmit={this.onSubmit}>
                    <p style={{ color: 'red' }}>Delete "{this.state.body}"?</p>
                    <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="submit" value="Delete this comment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            userId: this.state.userId,
            postedDate: this.state.postedDate,
            body: this.state.body,

        };
        console.log(obj);
        axios.delete('http://localhost:4001/comments/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/menu/comment');
    }
}
