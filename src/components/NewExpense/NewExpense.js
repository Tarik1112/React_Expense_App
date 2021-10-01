import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () =>{

    const saveEventHandler = (expenseData) => {
        const expenses = {
            ...expenseData,
            id: Math.random().toString()
        };
        console.log(expenses);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveEventHandler={saveEventHandler}></ExpenseForm>
        </div>
    );
};

export default NewExpense;