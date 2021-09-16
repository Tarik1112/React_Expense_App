import "./Item.css";
import ItemDate from "./ItemDate";
import Card from "./UI/Card"
function Item(props) {


  return (
    <Card className="item">
      <ItemDate date={props.date}></ItemDate>
      <div className="item-description">
        <h3>{props.title}</h3>

        <div className="item-price">
          <span>${props.amount}</span>
        </div>
      </div>
    </Card>
  );
}

export default Item;
