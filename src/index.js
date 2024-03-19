import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
const img = "https://picsum.photos/200/300";
const customeStyle = {
      color:"red",
      fontSize:"20px",
      border: "1px solid black"
};

customeStyle.color = "blue";

root.render(
    <div>
      <h1 style={customeStyle}>i am AKIDLL</h1>
      <div>
         <img src={img} alt="" />
         <img src={img} alt="" />
         <img src={img} alt="" />
      </div>
    </div>
);