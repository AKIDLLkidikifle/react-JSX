import React, {useState} from "react";

function InputArea(props){

       const[inputtext, setInputText] = useState("");

       function handleONchange(event){
           const currentText = event.target.value;
           setInputText(currentText);
       };

    return(
        <div className="form">
           <input  onChange={handleONchange} type="text" value={inputtext}/>
           <button onClick={()=>{
               props.buttonfun(inputtext);       
               setInputText(" ");
            }}> 
            <span>Add</span> </button>
      </div>
    )

};

export default InputArea;

