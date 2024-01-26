import React,{ useState } from "react";
import ErrorModal from "./ErrorModal";

const FragPortRefs = ()=>{
    const [isVisible,setIsVisible] = useState(false);
    const handleModelButton =()=>{
        setIsVisible(true);
    }
    const handleOnConfirm=()=>{
   setIsVisible(false);
    }
    return (
    <React.Fragment>
<button className="btn btn-primary" onClick={handleModelButton}> Open Modal</button>

{isVisible   &&  <ErrorModal title='My Modal Title' message='Message body for modal' onConfirm={handleOnConfirm}/>}


    </React.Fragment>
        );
}
export default FragPortRefs;