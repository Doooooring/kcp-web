import axios from 'axios'
import { Api_host } from '@asset/url'

class containerRepository {
  async getContainer(containerId) {
    const response = await axios.get(`Api_host/${containerId}`).data
    return response
  }
}

export default containerRepository
