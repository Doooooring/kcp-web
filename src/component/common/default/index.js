import styled from 'styled-components'
import axios from 'axios'
import containerServices from '@services/containerServices'
import { useState, useRef, useEffect } from 'react'
import { useOutlet } from 'react-router-dom'

// main component for detail page
export default function DefaultPage() {
  const outlet = useOutlet()
  const [curState, handleCurState] = useState(true)
  console.log("It's default")
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div``
