import React from 'react'

const Details = ({ details }) => {
  return (
    <>
      <div className='m-5 p-2 rounded shadow' id="details">
        <h1>Profile</h1>
        <table cellPadding={10}>
          <tr><td>First Name : {details.firstName}</td></tr>
          <tr><td>Last Name : {details.lastName}</td></tr>
          <tr><td>email : {details.email}</td></tr>
          <h5><tr><td>Salary : {details.monthly_Salary}</td></tr></h5>

        </table>

      </div>


    </>
  )
}

export default Details