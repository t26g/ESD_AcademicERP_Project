import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import salaryService from './services/salary'
import detailService from './services/details'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import Salarys from './components/Salarys'
import Details from './components/Details'
import Download from './components/Download'

const App = () => {
  const [page, setPage] = useState(1)
  const [user, setUser] = useState(null)
  const [bills, setBills] = useState([])
  const [details, setDetails] = useState([])
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  // logout method
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  // to handle notification
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 5000)
  }

  // to login
  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      console.log(userObject);
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))

      notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
      setBills([])

    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
    window.location.reload(true);
  }

  // whenever we change anything useEffect happens
  // it get salary details from services/salary from backend
  useEffect(() => {
    async function fetchData() {
      if (user) {
        const salary = await salaryService.getUserSalarys(user)
        setBills(salary)
      }
    }
    fetchData()
  }, [user])

  // get user details from ./services/details from backend
  useEffect(() => {
    async function fetchData() {
      if (user) {
        const faculty = await detailService.getUserDetails(user)
        setDetails(faculty)
      }
    }
    fetchData()
  }, [user])

  // store loggedIn user data to local Staorage
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div>
      <div className='text-center page-header p-2 regular-text-shadow regular-shadow'>
        <div className='display-4 font-weight-bold'>
          IIITB
        </div>

      </div>

      <Notification notification={notification} type={notificationType} />

      {
        user === null &&
        <LoginForm startLogin={handleLogin} />
      }

      {
        user !== null && page === 1 &&
        (
          <div>
            <br />
            <ul>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(1) }}>Home</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(2) }}>Salary Slip</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(3) }}>Salary History</button>
              <button className='btn btn-outline-danger btn-lg px-5' onClick={logout}>Logout</button>
            </ul>
            <Details
              details={details}
            />
          </div>
        )
      }


      {
        user !== null && page === 2 &&
        (
          <div>
            <br />
            <ul>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(1) }}>Home</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(2) }}>Salary Slip</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(3) }}>Salary History</button>
              <button className='btn btn-outline-danger btn-lg px-5' onClick={logout}>Logout</button>
            </ul>

            <Download details={details}/>

          </div>

        )
      }


      {
        user !== null && page === 3 && (
          <div>
            <br />
            <ul>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(1) }}>Home</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(2) }}>Salary Slip</button>
              <button className='btn btn-outline-info btn-lg px-5' onClick={() => { setPage(3) }}>Salary History</button>
              <button className='btn btn-outline-danger btn-lg px-5' onClick={logout}>Logout</button>
            </ul>
            <Salarys
              bills={bills}
            />
          </div>
        )

      }

    </div>
  )
}

export default App;
