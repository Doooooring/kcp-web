/**import axios from 'axios'
import {useRef, useEffect} from 'react'
import { ApiHostSocket } from '../asset/image/url/urls'
import io from "socket.io-client"

function ContainerSocket(containerId) {
    const socketIO = io(`${ApiHostSocket}?id=${containerId}`)
    //get state continually
    socketIO.on("connect", (state) => {

    })
    socketIO.on("")   
}

const initSocketConnection = (socketIO) => {
  if (socketIO) {
    return
  }
  socketIO.connect()
}

const endSocketConnection = (socketIO) => {
  if (socketIO === null || socketIO.connected === false) {
    return
  }
  socketIO.disconnect()
  socketIO = undefined
}

  //socket Start & socket End
  useEffect(() => {
    initSocketConnection(socketIO)
    socketIO.emit('getData', JSON.stringify(containerEP))
    return endSocketConnection(socketIO)
  }, [curPage])

  //get state continually
  useEffect(() => {
    socketIO.on('getState', (state) => {
      handleCurState(JSON.parse(state.data))
    })
  }, [])


export default ContainerSocket*/
