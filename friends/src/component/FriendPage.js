import React from 'react';
import FriendFile from './FriendFile';
// import moment from 'moment';

// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendPage extends React.Component {
    state = {
        id: [],
        name: '', 
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('this is res', res.data)
                
            
            this.setState({
                id: res.data
            });
            },[])
            .catch(err => console.log(err))
    };
    render() {
        console.log('homie', this.state.id)
        return(
            <div>
                {this.state.id.map((item, i) => <FriendFile item={item} key={i} />)}
            </div>        
            )
    }





}

export default FriendPage;