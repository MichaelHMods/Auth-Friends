import React from 'react';


const FriendFile = (props) => {
    console.log('FriendFile props',props.item.name)

    return(

        <div className="">    
            <div className="">Name: {props.item.name}</div>
            <div className="id">id: {props.item.id}</div>
            <div className="age">age:{props.item.age}</div>

        </div>    
    )



}
export default FriendFile;