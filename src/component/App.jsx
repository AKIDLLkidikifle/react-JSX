import React from "react";
import Login from "./Login";

let isLogedIn = true;

function conditionalRendering(){
  if(isLogedIn===false){
    return(<h1>Hello</h1>)
      
  }
  else{
    return(    
           <Login/>
    )
  }
}



function App() {
  return (
    <div className="container">
       {conditionalRendering()}
    </div>
  );
}

export default App;
