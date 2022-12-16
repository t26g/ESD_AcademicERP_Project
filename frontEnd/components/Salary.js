// it is called from Salarys
import React from 'react'

const Bill = ({ bill }) => {

  return (
    <tr>
      <td>{bill.description}</td>
      <td>{bill.payment_Date}</td>
      <td>{bill.amount}</td>
    </tr>
  )
}

export default Bill