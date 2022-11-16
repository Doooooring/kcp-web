import styled from 'styled-components'
import { useState } from 'react'
import { useOutlet } from 'react-router-dom'
import Sidebar from '@component/common/sidebar'

export default function ContainerMonitor() {
  const outlet = useOutlet()
  const [sideOpened, setSideOpened] = useState(false)
  return (
    <Wrapper>
      <Sidebar
        sideDict={[]}
        sideOpened={sideOpened}
        setSideOpened={setSideOpened}
      />
      <ContentWrapper
        style={{
          width: sideOpened ? '85%' : '97%',
          marginLeft: sideOpened ? '15%' : '3%',
        }}
      >
        {outlet}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 1;
`

const ContentWrapper = styled.div`
  display: inline-block;
  height: 1000px;
  transition-duration: 0.5s;
`
