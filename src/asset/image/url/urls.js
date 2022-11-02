//host url
export function Api_host(body, query) {
  return `http://${body}.api.river.com:${query}`
}
//Login page
export const loginUrl = '/login'

//Image page
export const imageBuildUrl = '/image/build'
export const imageMonitor = '/imgae/monitor'
export const imageMonitorDetails = '/image/monitor/view-detail'

//Container page
export const containerMonitor = '/container'
