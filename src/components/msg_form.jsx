import React from 'react'

const MsgForm = (props)=>{
    
    return (
        <form className="msg-form">
        <input
          className="msg-input-box"
          type="text"
          placeholder="Message..."
        />
      </form>
    );
}

export default MsgForm