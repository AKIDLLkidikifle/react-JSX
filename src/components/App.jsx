import React, {useState} from "react";

function App() {
  setInterval(TIME,1000);
  var time = new Date().toLocaleTimeString();
  const [Time, setState] = useState(time)

  function TIME(){
    var updatetime = new Date().toLocaleTimeString();
    setState(updatetime);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={TIME}>Get Time</button>
    </div>
  );
}

export default App;
//Challenge:
//1. Given that you can get the current time using:
let time = new Date().toLocaleTimeString();
console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);