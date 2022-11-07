import imageRepository from '@repositories/imageRepository'

class ImageServices {
  constructor() {
    this.imageRepository = new imageRepository()
  }

  /** Get images by searchKey */
  async getImages(searchKey = '') {
    const images = await this.imageRepository.getImages(searchKey)
    return images
  }

  /** Get image details {Name, Tag, ID, Status} */
  async getDetails(imageId) {
    const details = await this.imageRepository.getDetails(imageId)
    return details
  }
}

export default new ImageServices()
