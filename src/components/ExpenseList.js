import React from 'react'
import "./ExpenseList.css"
import Expenseltem from './Expenseltem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
  return (
    <React.Fragment>
      <ul className='list'>
          {expenses.map(expense => {
            return (
              <Expenseltem 
                expense = {expense} 
                key = {expense.id}
                handleDelete = {handleDelete}
                handleEdit = {handleEdit}
              />
            )
          })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      )}
    </React.Fragment>
  )
}

export default ExpenseList