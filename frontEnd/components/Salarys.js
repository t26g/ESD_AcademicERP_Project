// it show salary History
import React from 'react'
import Bill from './Salary'

const Bills = ({ bills }) => {
  console.log(bills)

  if (bills === [])
    return null

  return (
    <>
      <div className='m-5 p-2 rounded regular-shadow row d-flex justify-content-center align-items-center h-200' id="salarys">
        <h1 className='ml-2'>History of Salary disbursement</h1>
        <table cellPadding={10}>
          <tr>
            <th><h5>Description </h5></th>
            <th><h5>Salary Date </h5></th>
            <th><h5>Amount </h5></th>
          </tr>

          {/* we get salary List to print one salary in one row */}
          {
            bills.map(b =>
              <Bill
                bill={b}
                key={b.billId}
              />
            )
          }
        </table>
      </div>



    </>
  )
}

export default Bills