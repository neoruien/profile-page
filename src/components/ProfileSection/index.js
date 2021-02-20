import React from 'react';
import './style.css';
import Card from '../Card';
import DecorImage from './image.jpg';
import PhoneSvg from './phone.svg';
import CategoryPng from './category.png';
import ShopSvg from './shop.svg';
import TextBox from '../TextBox';
import axios from 'axios';

export default class ProfileSection extends React.Component {

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
        value: "1"
    };

    getAllUserInfo(userid) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then(res => {
                console.log(res);
                this.setState({userinfo: res.data});
                this.setState({userCompanyInfo: res.data.company});
                this.setState({userAddressInfo: res.data.address});
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
    
            </div>
        )
    }
}
