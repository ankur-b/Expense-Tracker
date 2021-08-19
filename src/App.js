import React ,{useState} from "react";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense";
const App = () => {
  const [expenses,setExpenses] = useState([])
  const addExpenseHandler = (expense) =>{
    setExpenses([expense,...expenses])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
