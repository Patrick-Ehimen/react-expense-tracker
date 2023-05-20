import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 4, 20) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 4, 20) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 4, 20) },
  ];
  return (
    <div>
      <ExpenseItem></ExpenseItem>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
