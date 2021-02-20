import axios from 'axios';

export default function getAllUserInfo(userid) {
    
    // state = {
    //     userinfo: [],
    //     userCompanyInfo: [],
    //     userAddressInfo: []
    // }
    
    axios.get(`https://jsonplaceholder.typicode.com/users/{userid}`).then(res => {
        console.log(res);
        this.setState({userinfo: res.data});
        this.setState({userCompanyInfo: res.data.company});
        this.setState({userAddressInfo: res.data.address});
    });

    // return state;
}
