import './Item.css'

function Item(){

return (
    <div className="item">
        <div className="item-date">
            <span>October 18th 2021</span>
        </div>
        <div className="item-description">
            <div className="item-name">
                <h3>Neckless</h3>
            </div>
            <div className="item-price">
                <span>$200</span>
            </div>
        </div>
    </div>
);

}

export default Item