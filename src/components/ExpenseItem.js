import React,{useState} from 'react'
import Card from './Card'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem=(props) =>{
  const [title,setTitle] = useState(props.title)
  const callback = (e)=>{
      setTitle("snjnj")
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={callback}>sds</button>
    </Card>
  );
}

export default ExpenseItem;