import React ,{useState} from 'react'
import "./ExpenseList.css";
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  const expenses = props.expenses;
  const [filteredYear,setFilteredYear] = useState('2020')
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear)
  }
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map((item) => {
        return <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />;
      })}
    </div>
  );
}

export default ExpenseList;
