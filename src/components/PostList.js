import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`).then(res => {
            console.log(res);
            this.setState({posts: res.data});
        });
    }

    render() {
        return (
            <u1>
                {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </u1>
        )
    }
}