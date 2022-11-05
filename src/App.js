
import './App.css';
import React,{useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 250,
        date: new Date(2022,5,12)
    },
    {
        id: 'e2',
        title: 'Collage Fee',
        amount: 550,
        date: new Date(2024,5,12)
    },
    {
        id: 'e3',
        title: 'Car',
        amount: 250,
        date: new Date(2022,5,12)
    },
    {
        id: 'e4',
        title: 'Book',
        amount: 5,
        date: new Date(2022,5,12)
    }
];

const App = () =>
{
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) =>
    {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler }/>
            <Expenses item = {expenses}/>
        </div>
    );
}

export default App;