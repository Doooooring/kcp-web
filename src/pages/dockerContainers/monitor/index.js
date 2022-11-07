import styled from 'styled-components'
import axios from 'axios'
import containerSerivces from '@services/containerServices'
import Header from '@component/common/header'
import Sidebar from '@component/common/sidebar'
import { useState, useEffect, useRef } from 'react'
import { Api_host, Api_host_socket } from '@asset/url'
import { io } from 'socket.io-client'

export default function ContainerMonitor({ containerId, curSide }) {
  const [curState, handleCurState] = useState(true)
  const socketIO = io(`${Api_host_socket}?id=${containerId}`)

  const initSocketConnection = () => {
    if (socketIO) {
      return
    }
    socketIO.connect()
  }

  const endSocketConnection = () => {
    if (socketIO === null || socketIO.connected === false) {
      return
    }
    socketIO.disconnect()
    socketIO = undefined
  }
  useEffect(() => {
    initSocketConnection()
    return endSocketConnection()
  }, [curSide])
  //get state continually
  useEffect(() => {
    socketIO.on('getState', (state) => {
      handleCurState(JSON.parse(state.data))
    })
  }, [])

  return <Wrapper></Wrapper>
}

const Wrapper = styled.div``
