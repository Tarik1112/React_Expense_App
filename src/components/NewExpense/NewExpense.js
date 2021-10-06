import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveEventHandler = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseHandler(expenses);
    setOpenForm(false);
  };

  const changeFormStatus = () => {
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  let formIsOpened = (
    <button onClick={changeFormStatus}>Add New Expense</button>
  );

  if (openForm === true) {
    formIsOpened = (
      <ExpenseForm
        onSaveEventHandler={saveEventHandler}
        closeForm={closeForm}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{formIsOpened}</div>;
};

export default NewExpense;
