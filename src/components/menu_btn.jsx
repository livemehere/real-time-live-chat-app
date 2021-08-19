import React from 'react'

const MenuBtn = (props)=>{
    
    return (
        <div className="menu-btn">
                <img src="/img/Vector-2.svg" alt="" />
                <div className="btn-text">{props.name}</div>
        </div>
    );
}

export default MenuBtn