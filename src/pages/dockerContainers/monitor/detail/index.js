import styled from 'styled-components'
import axios from 'axios'
import containerServices from '@services/containerServices'
import { Api_host, Api_host_socket } from '@asset/url'
import { io } from 'socket.io-client'
import { useState, useRef, useEffect } from 'react'

export default function Containerdetail(props) {
  const [curState, handleCurState] = useState(true)
  const containerEP = props.match.params.containerEP
  const curPage = props.curPage
  const socketIO = io(`${Api_host_socket}`)
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
  //socket Start & socket End
  useEffect(() => {
    initSocketConnection()
    socketIO.emit('getState', JSON.stringify(containerEP))
    return endSocketConnection()
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
