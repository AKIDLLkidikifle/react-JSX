import react from "react";
import reactDom  from "react-dom";
var currentyear = new Date().getFullYear()

reactDom.render(
   <div>
      <p>this is kidist</p>
      <p>copy right {currentyear}</p>
   </div>,
   document.getElementById("root")
)