import React from 'react';

// import moment from 'moment';

import Loader from 'react-loader-spinner';

import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendPage extends React.Component {
    state = {
        id: '',
        name: '', 
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                
            },[])
            this.setState({

            })

    }
    render() {
        return(
            <div>
                <p>div</p>
            </div>        )
    }





}

export default FriendPage;