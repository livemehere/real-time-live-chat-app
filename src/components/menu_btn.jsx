import React from 'react'

const MenuBtn = (props)=>{
    
    return (
        <div className="menu-btn">
                <img src={props.imgUrl} alt="" />
                <div className="btn-text">{props.name}</div>
        </div>
    );
}

export default MenuBtn