import React from 'react'

const UserMsg = (props)=>{
    
    return (
        <li className="user-msg">
            <span>{props.username}: </span>{props.user_msg}
        </li>
    );
}

export default UserMsg