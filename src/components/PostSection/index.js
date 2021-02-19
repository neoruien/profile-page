import React from 'react';
import './style.css';
import Card from '../Card';
import Post from '../Post';
import TextBox from '../TextBox';
import axios from 'axios';

export default class PostSection extends React.Component {
    
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

        const userName = this.state.posts.name;

            return (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px',
                }}>
                    <Card>
                        <TextBox>
                            <p className="title">Leanne's Posts</p>
                            <p className="subtitle">10 POSTS</p>
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