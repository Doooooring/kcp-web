import styled from 'styled-components'
import { useOutlet } from 'react-router-dom'

export default function ContainerMonitor() {
  const outlet = useOutlet()
  return <Wrapper>{outlet}</Wrapper>
}

const Wrapper = styled.div``
