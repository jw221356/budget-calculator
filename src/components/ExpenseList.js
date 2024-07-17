import React from 'react'
import "./ExpenseList.css"
import Expenseltem from './Expenseltem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, initialExpenses, handleEdit}) => {
  return (
    <React.Fragment>
      <ul className='list'>
          {initialExpenses.map(expense => {
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
      <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon'/>
      </button>
    </React.Fragment>
  )
}

export default ExpenseList