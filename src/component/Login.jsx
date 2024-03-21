import React from "react";
import Input from "./Input";

function Login(props){
    return(
       <div>
         <form className="form">
            <Input type="text" placeholder="enter your name"/>
            <Input type="password" placeholder="enter your password"/>
            <button type={props.type}>Login</button>
         </form>
       </div>
    )
}

export default Login;