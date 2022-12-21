import axios from "axios";
import { HOST_DAEMON } from "@asset/url";
import ContainerMonitor from "../pages/dockerContainers/monitor";

class containerRepository {
  async getContainer(containerId = "", filterCheck = "") {
    if (containerId === "") {
      if (filterCheck === "") {
        const response = await axios.get(`${HOST_DAEMON}/containers/json`);
        return response.data;
      } else {
        const response = await axios.get(`${HOST_DAEMON}/containers/json`, {
          params: {
            filters: {
              status: [`${filterCheck}`],
            },
          },
        });
        return response.data;
      }
    } else {
      if (filterCheck === "") {
        const response = await axios.get(`${HOST_DAEMON}/containers/json`, {
          params: {
            filters: {
              name: [`${containerId}`],
            },
          },
        });
        return response.data;
      } else {
        const response = await axios.get(`${HOST_DAEMON}/containers/json`, {
          params: {
            filters: {
              name: [`*${containerId}*`],
              status: [`${filterCheck}`],
            },
          },
        });

        return response.data;
      }
    }
  }
  async getContainerHealth(containerId) {
    const { Config } = await axios.get(
      `${HOST_DAEMON}/containers/${containerId}/json`
    );
    const { Healthcheck } = Config;
    return Healthcheck;
  }
}

export default containerRepository;
