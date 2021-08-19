import React from 'react'

const GameIcon = (props)=>{
    
    return (
        <div className="game-icon-box">
            <img src={props.iconUrl} alt="" />
        </div>
    );
}

export default GameIcon