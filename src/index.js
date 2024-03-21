import React from "react";
import ReactDom from "react-dom/client";
import App from "./component/App";
import Emojipedia from "./emoji";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render( 
        <App/>
);




const output = Emojipedia.map(function(element){
        return (element.meaning.slice(0,60));
});
   
console.log(output);
