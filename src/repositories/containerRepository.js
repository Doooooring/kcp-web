import axios from 'axios'
import { Api_host } from '@asset/url'

class containerRepository {
  async getContainer(containerId, filterCheck) {
    const response = await axios.get(`Api_host?id=${containerId}&state=${filterCheck}`).data
    return response
  }
}

export default containerRepository
