import React, { Component } from 'react'
import "./ExpenseList.css"
import Expenseltem from './Expenseltem'

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='list'>
            <Expenseltem />
        </ul>
        <button className='btn'>
            목록 지우기
        </button>
      </React.Fragment>
    )
  }
}

export default ExpenseList