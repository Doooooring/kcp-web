//host url
export function Api_host(body, path, port, query) {
  return `http://${body}.api.river.com/${path}:${port}?${query}`
}
export function Api_host_socket(body, path, port, query) {
  return `ws://${body}.api.river.com/${path}:${port}?${query}`
}
//Login page
export const loginUrl = '/login'

//Image page
export const imageBuildUrl = '/image/build'
export const imageMonitor = '/imgae/monitor'
export const imageMonitorDetails = '/image/monitor/view-detail'

//Container page
export const containerMonitor = '/container'
