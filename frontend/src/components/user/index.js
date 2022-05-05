import React from "react" ;
import {Outlet} from "react-router-dom";

const User=()=>{

    return (
    
    <div>
        <h1 className="text-center"></h1>
        <Outlet/>


    </div>
    
    );
};

export default User;

