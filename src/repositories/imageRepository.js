import axios from "axios";

import { HOST_URL, HOST_DAEMON } from "@asset/url";

class ImageRepository {
  /** Get images by search key */
  async getImages(repoName = "", searchKey = "") {
    if (repoName === "") {
      if (searchKey === "") {
        const response = await axios.get(`${HOST_DAEMON}/images/json`);
        return response.data;
      } else {
        const response = await axios.get(`${HOST_DAEMON}/images/json`, {
          parmas: { filter: { reference: [`*${repoName}*`] } },
        });
        return response.data;
      }
    } else {
      if (searchKey === "") {
        const response = await axios.get(`${HOST_DAEMON}/images/json`, {
          params: {
            filters: {
              reference: [`*${repoName}*:*`],
            },
          },
        });
        return response.data;
      }
      const response = await axios.get(`${HOST_DAEMON}/images/json`, {
        params: {
          filters: {
            reference: [`*${repoName}*:*${searchKey}*`],
          },
        },
      });
      return response.data;
    }
  }

  /** Get details(tags, digests, created, )  from image by image id */
  async getDetails(imageId) {
    const response = await axios.get(`${HOST_DAEMON}/images/${imageId}/json`);
    return response.data;
  }

  /** Delete repository, by delete all images with the repository */
  async deleteRepositories(repoName) {
    const response = await axios.delete(`${HOST_DAEMON}/images/${repoName}`);
    return response.data;
  }
}

export default ImageRepository;
