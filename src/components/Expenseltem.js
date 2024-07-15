import React, { Component } from 'react'
import "./ExpenseItem.css"
import {MdDelete, MdEdit} from "react-icons/md"

export class Expenseltem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>헬스 등록</span>
            <span className='amount'> 1000 원</span>
        </div>
            <div>
                <button className='edit-btn'><MdEdit /></button>
                <button className='clear-btn'><MdDelete /></button>
            </div>
      </li>
    )
  }
}

export default Expenseltem