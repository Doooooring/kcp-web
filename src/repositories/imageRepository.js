import axios from 'axios'

class ImageRepository {
  async getImages(searchKey) {
    const response = await axios.get('').data
    return response
  }

  async getDetails(imageId) {
    const response = await axios.get('').data
  }
}

export default ImageRepository
