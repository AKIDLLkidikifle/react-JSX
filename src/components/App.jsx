import React, {useState} from "react";

function App() {
  const[inputtext, setInputText] = useState("");
  const[Item, setitem] = useState([]);

  function handleONchange(event){
      const currentText = event.target.value;
      setInputText(currentText);
  };

  function handleClick(){
    setitem((prevValue)=>{
        return [...prevValue, inputtext]  
    });

    setInputText(" ");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List </h1>
      </div>
      <div className="form">
        <input  onChange={handleONchange} type="text" value={inputtext}/>
        <button onClick={handleClick}> <span>Add</span> </button>
      </div>
      <div>
        <ul> {Item.map((element) => (<li>{element}</li>))} </ul>
        
      </div>
    </div>
  );
}

export default App;


