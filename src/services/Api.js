import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://68.183.172.146`
  })
}