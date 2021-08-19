import React from 'react'
import UserMsg from './user_msg';

const ChatList = (props)=>{
    
    return (
        <ul className="chat-list">
            {props.chatList.map(chat=><UserMsg key={chat.id} username={chat.username} user_msg={chat.user_msg} />)}
        </ul>
    );
}

export default ChatList