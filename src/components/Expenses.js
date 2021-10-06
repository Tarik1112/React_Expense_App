import Item from "./Item";
import Card from "./UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const yearHandler = (selectedYear) => {
    setYear(selectedYear);
  };


  const yearFilter = props.items.filter((filYear) => {
    return filYear.date.getFullYear().toString() === year; 
    
  })

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter selectedYear={year} onyearHandler={yearHandler} />
        {yearFilter.map((expenses) => (
          <Item
            key = {expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        {/* <Item
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></Item>
        <Item
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></Item>
        <Item
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></Item> */}
      </Card>
    </div>
  );
}

export default Expenses;
