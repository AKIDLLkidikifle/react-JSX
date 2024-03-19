import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const customStyle = {
    color:"black"
}

let d = new Date(2019,1,1, 19);
let time = d.getHours();
let message = "";

if(time < 12){
   message = "good morning";
   customStyle.color="red";
}
else if(time < 18){
   message = "good afternoon";
   customStyle.color="green";
}
else{
   message = "good night";
   customStyle.color="blue";
}

root.render(
   <h1 className="heading" style={customStyle}>{message}</h1>
)