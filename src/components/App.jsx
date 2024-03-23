import React, { useState } from "react";

function App() {

const [color, setcolor] = useState(false);  

  function handleClick(){
        console.log("i got clicked");
  }

  function handleMouseOver(){
    setcolor(true);
  }

  function handleonMouseOut(){
    setcolor(false);
  }
    
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:color ? "black": "white"}} onClick={handleClick} onMouseOut={handleonMouseOut} onMouseOver={handleMouseOver}>Submit</button>
    </div>
  );
}

export default App;
