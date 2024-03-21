import React from "react";
import Input from "./Input"

function Form(props){
    return(
        <div>
          <form className="form">
             <Input type="text" placeholder="enter your name"/>
             <Input type="password" placeholder="enter your password"/>
             {!props.type && <Input type="password" placeholder="confirm your password"/>}
             {props.type===false? <button type="submit">Register</button> : <button type="submit">Login</button>}
          </form>
        </div>
     )
}

export default Form;