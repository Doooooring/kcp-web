import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SpeechBubble } from '@component/common/figure'
import { AiOutlineHolder } from 'react-icons/ai'

export default function getContainerDetail({ containerId }) {
  return (
    <Wrapper>
      <Link to={`/contents/container/monitor/detail:${containerId}`}>
        <AiOutlineHolder
          style={{
            position: 'relative',
            size: '20px',
            zIndex: 0,
          }}
        />
      </Link>
      <BubbleWrapper>
        <SpeechBubble
          height="40px"
          width="180px"
          color="rgb(230, 230, 230)"
          component={'Move on Detail page'}
        />
      </BubbleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  &:hover {
    cursor: pointer;
    div {
      opacity: 100%;
    }
  }
  div {
    position: relative;
    top: 10px;
    left: -40px;
    opacity: 0;
    pointer-events: none;
    z-index: 9;
  }
`

const BubbleWrapper = styled.div``
