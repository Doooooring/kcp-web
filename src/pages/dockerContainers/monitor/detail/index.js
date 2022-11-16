import styled from 'styled-components'
import axios from 'axios'
import containerServices from '@services/containerServices'
import { Api_host, Api_host_socket } from '@asset/url'
import { io } from 'socket.io-client'
import { useState, useRef, useEffect } from 'react'

// main component for detail page
export default function Containerdetail(props) {
  const [curState, handleCurState] = useState(true)
  const curPage = props.curPage


  return <Wrapper></Wrapper>
}

const Wrapper = styled.div``
