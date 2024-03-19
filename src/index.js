import React from "react";
import ReactDom  from "react-dom/client";

const img = "https://picsum.photos/200/300";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
   <div>
     <h1 className="heading">this is react</h1>
     <div>
         <img src={img+"?grayscale"} alt=""/>
         <img src={img+"?grayscale"} alt=""/>
         <img src={img+"?grayscale"} alt=""/>
     </div>
   </div>
);