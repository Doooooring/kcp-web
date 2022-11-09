import styled from 'styled-components'
import axios from 'axios'
import containerServices from '@services/containerServices'
import { Api_host, Api_host_socket } from '@asset/url'
import { io } from 'socket.io-client'
import { useState, useRef, useEffect } from 'react'

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

//main component for monitoring page
export default function Containerdetail(props) {
  const [curState, handleCurState] = useState(true)
  const containerEP = props.match.params.containerEP
  const curPage = props.curPage
  const socketIO = io(`${Api_host_socket}`)

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

  return <Wrapper></Wrapper>
}

const Wrapper = styled.div``
