import React,{ useState } from "react";


const UserCamera = ({zoomAvailable,setZoomFlag})=>{

    const [isZoom, setIsZoom] = useState(false);

    const togleZoom = () => {
        if(zoomAvailable || isZoom === true){
            setIsZoom(!isZoom);
            setZoomFlag();
            console.log('zoom success!')
        }else{
            console.log('someone zooming!')
        }
        
    };
    return (
        <div className={isZoom ? 'user-camera zoomed' : 'user-camera'} onClick={togleZoom}>
            <img src="/img/user.svg" alt="" />
        </div>
    );
}

export default UserCamera