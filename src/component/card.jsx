import React from "react";
import Avator from "./Avator";
import Detail from "./detail";

function Card(props){
    return(
      <div className="card">
        <div className="top">
            <h1 className="name">{props.name}</h1>
            <Avator  img={props.img}/>
        </div>
        <div className="bottom">
            <Detail tel={props.tel}  email={props.email}/>
        </div>
      </div>
    )
}
export default Card;