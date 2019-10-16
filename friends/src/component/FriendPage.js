import React from 'react';
import FriendFile from './FriendFile';
// import moment from 'moment';

// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendPage extends React.Component {
    state = {
        id: [{}],
        name: '', 
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('this is res', res.data[0])
                const friend = res.data
            
            this.setState({
                id: {friend}
            })
            },[])

    }
    render() {
        console.log('homie', this.state.id)
        return(
            <div>
                
            </div>        )
    }





}

export default FriendPage;