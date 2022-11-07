import containerRepository from '@repositories/containerRepository'

class ContainerServices {
  constructor() {
    this.containerRepository = new containerRepository()
  }
}
