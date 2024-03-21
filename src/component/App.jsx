import React from "react";
import Emojipedia from "../emoji";
import Card from "./Card";

function createList(eachlist){
     return(
         <Card  key={eachlist.id}  emoji={eachlist.emoji} name={eachlist.name} meaning={eachlist.meaning}/>
     )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
         {Emojipedia.map(createList)}
      </dl>
    </div>
  );
}

export default App;
