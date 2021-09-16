import "./Item.css";
import ItemDate from "./ItemDate";
function Item(props) {


  return (
    <div className="item">
      <ItemDate date={props.date}></ItemDate>
      <div className="item-description">
        <h3>{props.title}</h3>

        <div className="item-price">
          <span>${props.amount}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
