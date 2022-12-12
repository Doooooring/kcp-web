import imageRepository from "@repositories/imageRepository";

import { HOST_DAEMON } from "@asset/url";

class ImageServices {
  constructor() {
    this.imageRepository = new imageRepository();
  }

  async getAllImages(searchKey = "") {
    const images = await this.imageRepository.getImages("", searchKey);
    return images;
  }

  /** Get images by searchKey */
  async getImages(repoName, searchKey = "") {
    const images = await this.imageRepository.getImages(
      `${HOST_DAEMON}/${repoName}`,
      searchKey
    );
    return images;
  }

  /** Get image details {Name, Tag, ID, Status} */
  async getDetails(imageId) {
    const details = await this.imageRepository.getDetails(imageId);
    return details;
  }
}

export default new ImageServices();
