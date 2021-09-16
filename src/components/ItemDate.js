
import './ItemDate.css'

function ItemDate(props){    
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.toLocaleString('default', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className="item-date">
            <div className="date-month">{month}</div>
            <div className="date-year">{year}</div>
            <div className="date-day">{day}</div>
        </div>
    )
        
}

export default ItemDate;