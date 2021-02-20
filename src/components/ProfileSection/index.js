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
    
    state = {
        userinfo: [],
        userCompanyInfo: [],
        userAddressInfo: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(res => {
            console.log(res);
            this.setState({userinfo: res.data});
            this.setState({userCompanyInfo: res.data.company});
            this.setState({userAddressInfo: res.data.address});
        });
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
                    <TextBox>
                        <div class="row">
                            <p className="title">{userName}</p>
                        </div>
                        <div class="row">
                            <img src={PhoneSvg} alt="Phone" width="25" />
                            <span> </span>
                            {phoneNumber}
                        </div>
                        <div class="row">
                            <img src={CategoryPng} alt="Category" width="25" />
                            <span> </span>
                            {categories}
                        </div>
                        <div class="row">
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
