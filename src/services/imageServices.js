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

  /** delete repository */
  async deleteRepositories(setCurRepositories, repositoriesToDelete) {
    const strForParam = repositoriesToDelete.reduce((acc, cur) => {
      acc += `${cur},`
      return acc
    }, '')
    const newRepoList = await this.imageRepository.deleteRepositories(
      strForParam,
    )
    setCurRepositories(newRepoList)
  }

  /** Add repository */
  async addRepository(setCurRepositories, repoInfo) {
    const newRepoList = await this.imageRepository.addRepository(repoInfo)
    setCurRepositories(newRepoList)
  }
}

export default new ImageServices()
