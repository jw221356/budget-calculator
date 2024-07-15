import React, { Component } from 'react'
import "./ExpenseItem.css"

export class Expenseltem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>헬스 등록</span>
            <span className='amount'> 1000 원</span>
        </div>
            <div>
                <button className='edit-btn'>수정</button>
                <button className='clear-btn'>삭제</button>
            </div>
      </li>
    )
  }
}

export default Expenseltem