import axios from 'axios'
const baseUrl = '/api/persons'

const getAllPersons = () => {
  return axios.get(baseUrl)
}

const addPerson = person => {
  return axios.post(baseUrl, person)
}

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updatePersonNumber = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
}

export default {
  getAllPersons,
  addPerson,
  deletePerson,
  updatePersonNumber,
}
