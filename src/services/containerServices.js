import containerRepository from '@repositories/containerRepository'

class ContainerServices {
  constructor() {
    this.containerRepository = new containerRepository()
  }
  async getContainer(userId) {
    const containers = await this.containerRepository.getContainer(userId)
    return containers
  }
}

export default ContainerServices
