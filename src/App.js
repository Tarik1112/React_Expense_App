
import Expenses from "./components/Expenses"
function App() {
  const expenses = [
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

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
