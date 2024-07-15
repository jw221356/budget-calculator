import React, { Component } from 'react'
import "./ExpenseList.css"
import Expenseltem from './Expenseltem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  
  render() {
    console.log(this.props.initialExpenses)
    return (
      <React.Fragment>
        <ul className='list'>
            <Expenseltem />
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      </React.Fragment>
    )
  }
}

export default ExpenseList