import React, { useState } from 'react'
import downloadServices from '../services/download'

const Download = ({ details }) => {
  const [section, setSection] = useState(1)
  const [slip, setSlip] = useState('')
  const [x, setX] = useState('')
  const [t, setDownload] = useState('')

  const monthIdList = [
    {
      id: 0,
      value: 'Select Month'
    }, {
      id: 1,
      value: 'January'
    }, {
      id: 2,
      value: 'February'
    }, {
      id: 3,
      value: 'March'
    }, {
      id: 4,
      value: 'April'
    }, {
      id: 5,
      value: 'May'
    }, {
      id: 6,
      value: 'June'
    }, {
      id: 7,
      value: 'July'
    }, {
      id: 8,
      value: 'August'
    }, {
      id: 9,
      value: 'September'
    }, {
      id: 10,
      value: 'October'
    }, {
      id: 11,
      value: 'November'
    }, {
      id: 12,
      value: 'December'
    }
  ];

  function Options({ options }) {
    return (
      options.map(option =>
        <option key={option.id} value={option.value}>
          {option.value}
        </option>)
    );
  }

  const download = async (event) => {

    event.preventDefault()

    console.log("Faculty Id:", details.facultyId)
    let y = details.facultyId
    setX(y)
    console.log(x)
    const credentials = {
      y, slip
    }

    console.log("From Downloads: ", credentials)
    if (slip === "January" || slip === "February" || slip === "March" || slip === "April" || slip === "May" || slip === "June" || slip === "July" || slip === "August" || slip === "September" || slip === "October" || slip === "November" || slip === "December") {
      try {
        const faculty = await downloadServices.getUserSlip(credentials)
        setDownload(faculty)
        console.log(t)
        setSlip('')
        setSection(2)
      } catch (exception) {
        console.log("catch")
        alert("Salary is not available for this Month");
        setSlip('')
      }

    }
    else {
      alert("Enter Valid Month");
      setSlip('')
    }

  }

  function printDiv() {
    var printContents = document.getElementById("download").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload(true);
  }

  return (

    <div>

      <form onSubmit={download} id='form'>
      <div className='m-5 p-2 rounded shadow' id="select">
              <select
                name="animal"
                className="form-control"
                value={slip}
                onChange={e => setSlip(e.target.value)}
                style={{ maxWidth: "200px" }}
                required>
                <option value="0" selected disabled hidden>Month</option>
                <Options options={monthIdList} />
              </select>
              <br/>
              <button className="btn btn-outline-success btn-lg px-5" type='submit' id='login-submit'>Submit</button>
           </div>
      </form>

      <div>
        {/* {
          <form onSubmit={download} id='form'>
            <div className="row d-flex justify-content-center align-items-center h-200">
              <div className="card-body p-5 text-center">
                <label className="form-label" htmlFor="form2Example1"><h4>Enter Month</h4></label>
                <br />
                <div className="form-outline form-white mb-4">
                  <input type='text' placeholder='Month' value={slip} onChange={event => setSlip(event.target.value)} id='email' required />
                </div>
                <button className="btn btn-outline-success btn-lg px-5" type='submit' id='login-submit'>Submit</button>
              </div>
            </div>
          </form>
        } */}

        {section === 2 &&
          <div className='m-5 p-2 rounded shadow' id="download">
            <h1>Salary Slip</h1>
            <table cellPadding={10}>
              <tr><td>First Name  : {details.firstName}</td></tr>
              <tr><td>Last Name  : {details.lastName}</td></tr>
              <tr><td>Amount  : {t.amount}</td></tr>
              <tr><td>description  : {t.description}</td></tr>
              <tr><td>payment_Date : {t.payment_Date}</td></tr>

            </table>
            <br />
            <button className="btn btn-lg btn-outline-success btn-lg px-8" onClick={printDiv}>Download</button>
          </div>
        }

      </div >
    </div>
  )
}

export default Download