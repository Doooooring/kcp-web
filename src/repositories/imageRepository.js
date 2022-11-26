import axios from 'axios'

import { HOST_URL } from '@asset/url'

class ImageRepository {
  /** Get images by search key */
  async getImages(searchKey) {
    const response = await axios.get('').data
    return response.data
  }

  /**  */
  async getDetails(imageId) {
    const response = await axios.get('').data
    return response.data
  }

  async deleteRepositories(strForParam) {
    const response = await axios.delete('', {
      params: strForParam,
    })
    return response.data
  }
  
  async addRepository(repoInfo) {
    const response = await axios.post('', repoInfo)
    return response.data
  }
}

export default ImageRepository
