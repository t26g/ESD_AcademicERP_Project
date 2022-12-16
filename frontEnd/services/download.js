import axios from 'axios'

const downloadBaseUrl = `http://localhost:8080/api/salary/download`

const getUserSlip = async (credentials) => {

  const response = await axios.get(downloadBaseUrl + "?facultyId=" + credentials.y + "&Month=" + credentials.slip);

  return response.data
}

const exportObject = { getUserSlip }
export default exportObject