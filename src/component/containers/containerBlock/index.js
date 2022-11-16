import styled from 'styled-components'
import axios from 'axios'
import containerService from '@services/containerServices'
import { useRef, useEffect } from 'react'

export default function ContainerBlock({ comp }) {
  const { containerId, status, log } = comp

  return (
    <Wrapper>
      <ContId>{ContId}</ContId>
      <ContStatus>{status}</ContStatus>
      <ContLog>{log}</ContLog>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const ContId = styled.p`
  display: inline-block;
`
const ContStatus = styled.div``
const ContLog = styled.p``
