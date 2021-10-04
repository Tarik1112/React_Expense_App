import React, { useState } from "react";
import "./Item.css";
import ItemDate from "./ItemDate";
import Card from "./UI/Card";
function Item(props) {

  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("Apple");
    console.log(title);
  };


  return (
    <Card className="item">
      <ItemDate date={props.date}></ItemDate>
      <div className="item-description">
        <h3>{title}</h3>

        <div className="item-price">
          <span>${props.amount}</span>
        </div>
        <button onClick={changeTitle}>Change title!</button>
      </div>
      
    </Card>
  );
}

export default Item;
