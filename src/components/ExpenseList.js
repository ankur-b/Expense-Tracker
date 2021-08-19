import React ,{useState} from 'react'
import "./ExpenseList.css";
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from './ExpensesChart';
function ExpenseList(props) {
  const expenses = props.expenses;
  const [filteredYear,setFilteredYear] = useState('2021')
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenses.filter((expense)=>expense.date.getFullYear().toString()===filteredYear)
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/> 
      {filteredExpenses.length === 0 ? <p style={{color:'white'}}>No Expenses Found</p>:filteredExpenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />;
      })}
    </div>
  );
}

export default ExpenseList;
