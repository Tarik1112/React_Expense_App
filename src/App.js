import {useState} from 'react'
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";


const INITIAL_DATA = [
  {
    id: 1,
    title: "Neckless",
    amount: 200,
    date: new Date(2021, 2, 28),
  },
  {
    id: 2,
    title: "Ring",
    amount: 500,
    date: new Date(2021, 4, 18),
  },
  {
    id: 3,
    title: "Bracelet",
    amount: 350,
    date: new Date(2021, 5, 22),
  },
];


function App() {
  
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const setNewExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onNewExpenseHandler={setNewExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
