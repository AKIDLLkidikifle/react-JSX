import React from "react";
import Form from "./Form";

let isLogedIn = false;

function App() {
  return (
    <div className="container">
       <Form  type={isLogedIn}/>
    </div>
  );
}

export default App;
