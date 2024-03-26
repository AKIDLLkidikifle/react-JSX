import React, {useState} from "react";
import TodoItem from "./Todoitem";

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

  function deleteItem(id){
    setitem((prevValue)=>{
      return prevValue.filter((element, index)=>{
         return index!==id;
      })
    })
  }

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
           <ul> {Item.map((element, index) => (
               <TodoItem key={index} id={index} text={element} onChecked={deleteItem}/>
             ))}
           </ul>
      </div>
    </div>
  );
}

export default App;

