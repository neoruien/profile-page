import React from 'react';
import './style.css';
import Card from '../Card';
import DecorImage from './image.jpg';
import PhoneSvg from './phone.svg';
import CategoryPng from './category.png';
import ShopSvg from './shop.svg';
import TextBox from '../TextBox';
import axios from 'axios';
import Post from '../Post';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.getAllUserInfo = this.getAllUserInfo.bind(this);
    }

    handleChange = event => {
        this.setState({value: event.target.value});
        this.getAllUserInfo(event.target.value);
    }

    state = {
        userinfo: [],
        userCompanyInfo: [],
        userAddressInfo: [],
        value: "1",
        posts: []
    };

    getAllUserInfo(userid) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then(res => {
            console.log(res);
            this.setState({userinfo: res.data});
            this.setState({userCompanyInfo: res.data.company});
            this.setState({userAddressInfo: res.data.address});
        });

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`).then(res => {
            console.log(res);
            this.setState({posts: res.data});
        });
    };

    componentDidMount() {
        this.getAllUserInfo(1);
    }

    render() {

        const userName = this.state.userinfo.name;

        const phoneNumber = ("" + this.state.userinfo.phone).split(" ")[0];

        const categories = ("" + this.state.userCompanyInfo.bs).split(" ").join(" • ");

        const address = ("" + this.state.userAddressInfo.street + ", "
            + this.state.userAddressInfo.suite + ", "
            + this.state.userAddressInfo.city);

        const firstName = ("" + userName).split(" ")[0];

        const numPosts = this.state.posts.length;

        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px'
            }}>
                <Card>
                    <img src={DecorImage} alt="Decoration" width="450" />
                    <div className="topright">
                        <span>User: </span>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <TextBox>
                        <p className="title">{userName}</p>
                        <div className="row">
                            <img src={PhoneSvg} alt="Phone" width="25" />
                            <span> </span>
                            {phoneNumber}
                        </div>
                        <div className="row">
                            <img src={CategoryPng} alt="Category" width="25" />
                            <span> </span>
                            {categories}
                        </div>
                        <div className="row">
                            <img src={ShopSvg} alt="Shop" width="25" />
                            <span> </span>
                            {address}
                        </div>
                    </TextBox>
                </Card>
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
