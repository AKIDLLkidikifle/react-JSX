import React, {useState} from "react";

function App() {

   const[color, setcolor] = useState(false);
  
   function handleClick(){
    setcolor(true);
   }

   function handleMouseOut(){
    setcolor(false);
   }
   

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:color ? "black" : "white"}} onMouseOut={handleMouseOut} onMouseOver={handleClick}>Submit</button>
    </div>
  );
}

export default App;
