import React from "react";
import {NavLink} from "react-router-dom";

function Card(props) {

  return (
    <div className="cardNew">
      <img src={props.icon} />
      <div class="carouse-caption d-none d-sm-block cardHSize">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}
export default Card;