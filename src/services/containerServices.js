import containerRepository from '@repositories/containerRepository'

class ContainerServices {
  constructor() {
    this.containerRepository = new containerRepository()
  }
  async getContainer(userId, filterCheck) {
    const containers = await this.containerRepository.getContainer(
      userId,
      filterCheck,
    )
    return containers
  }
}

export const containerServices = new ContainerServices()
