import React from 'react';
import axios from 'axios';

export default class PostInput extends React.Component {
    state = {
        title: '',
    }

    handleChange = event => {
        this.setState({title: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const post = {
            title: this.state.title
        }

        axios.post(`https://jsonplaceholder.typicode.com/posts?userId=1`, {post}).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Post Title:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}