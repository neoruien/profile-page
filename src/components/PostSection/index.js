import React from 'react';
import './style.css';
import Card from '../Card';
import Post from '../Post';
import TextBox from '../TextBox';
import axios from 'axios';

export default class PostSection extends React.Component {
    
    state = {
        username: "",
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`).then(res => {
            console.log(res);
            this.setState({posts: res.data});
        });

        axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(res => {
            console.log(res);
            this.setState({username: res.data.name});
        });
    }

    render() {

        const firstName = this.state.username.split(" ")[0];

        const numPosts = this.state.posts.length;

            return (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px',
                }}>
                    <Card>
                        <TextBox>
                            <p className="title">{firstName}'s Posts</p>
                            <p className="subtitle">{numPosts} POSTS</p>
                            <div className="postcontainer">
                                {this.state.posts.map(post => <div key={post.id}>
                                    <Post>
                                        {post.title}
                                        <p className="postbody">{post.body}</p>
                                    </Post>
                                </div>)}
                            </div>
                        </TextBox>
                    </Card>
                </div>
            )
    }
}