import React, {useState} from "react";

function App() {

   const[color, setcolor] = useState(false);

   const [text, settext] = useState("");
   const [heading, setheading] = useState("");
  
   function handleClick(){
    setcolor(true);
   }

   function handleMouseOut(){
    setcolor(false);
   }

   function handleOnchange(event){
     settext(event.target.value);
   }

   function handleOnclick(event){
    setheading(text);

    event.preventDefault();
   }
   

  return (
    <div className="container">
      <form onSubmit={handleOnclick}>
         <h1>hello {heading.slice(0,3)}</h1>
         <input onChange={handleOnchange} type="text" placeholder="What's your name?"/>
         <button type="submit" style={{backgroundColor: color ? "black" : "white"}}  onMouseOut={handleMouseOut} onMouseOver={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
