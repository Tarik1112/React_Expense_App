import "./Item.css";
import ItemDate from "./ItemDate";
function Item() {
  const date = new Date("16 September 2021");
  const itemName = "Neckless";
  const itemPrice = 200;

  return (
    <div className="item">
      <ItemDate date={date}></ItemDate>
      <div className="item-description">
        <h3>{itemName}</h3>

        <div className="item-price">
          <span>${itemPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
