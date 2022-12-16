import axios from 'axios'

const detailsURL = `http://localhost:8080/api/faculty/details`

const getUserDetails = async (faculty) => {
  const response = await axios.get(`${detailsURL}?facultyId=${faculty.facultyId}`)

  console.log(response.data)

  return response.data
}

const exportObject = { getUserDetails }

export default exportObject