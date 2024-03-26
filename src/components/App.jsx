import React, {useState} from "react";
import TodoItem from "./Todoitem";
import InputArea from "./InputArea";

function App() {
 
  const[Item, setitem] = useState([]);

  function handleClick(inputtext){
    setitem((prevValue)=>{
        return [...prevValue, inputtext]  
    });
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
      <InputArea   buttonfun={handleClick} />
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

