import axios from 'axios'

const salaryURL = `http://localhost:8080/api/salary/salaryDetails`

const getUserSalarys = async (faculty) => {
  const response = await axios.get(`${salaryURL}?facultyId=${faculty.facultyId}`)

  console.log(response.data)

  return response.data
}
const exportObject = { getUserSalarys }

export default exportObject