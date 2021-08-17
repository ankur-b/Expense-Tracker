import React from 'react'
import "./ExpenseList.css";
import Card from './ExpenseList'
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  const expenses = props.expenses;
  return (
    <div className="expenses">
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
