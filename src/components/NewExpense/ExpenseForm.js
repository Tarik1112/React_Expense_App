import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [addedTitle, setAddedTitle] = useState('');
  const [addedAmount, setAddedAmount] = useState('');
  const [addedDate, setAddedDate] = useState('');

  const titleChangeHandler = (event) => {
    setAddedTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAddedAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setAddedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      title: addedTitle,
      amount: addedAmount,
      date: new Date(addedDate),
    };
    props.onSaveEventHandler(newData);
    setAddedTitle("");
    setAddedAmount("");
    setAddedDate("");
  };
  
  const closeForm = () => {
    props.closeForm();
  }


  return (

    
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={addedTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={addedAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={addedDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeForm}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
