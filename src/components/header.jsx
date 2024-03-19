import React from "react";

let time = new Date(2024, 1, 2, 19).getHours();
let message = "hi";
let custemStyle = {
    color:"red"
}

function Header(){
    if(time < 12){
        message = "Good morning";
        custemStyle.color = "red";
    }
    else if(time < 18){
        message = "Good afternoon";
        custemStyle.color = "green";
    }
    else{
        message = "Good evening";
        custemStyle.color = "blue";
    }
    return (
         <div>
            <h1 className="heading" style={custemStyle}>{message}</h1>
         </div>
    )
};

export default Header;