import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHolder } from 'react-icons/ai'

export default function getContainerDetail({ containerId }) {
  return (
    <Wrapper>
      <Link to={`/pages/dockerContainers/monitor/detail:${containerId}`}>
        <AiOutlineHolder
          style={{
            size: '20px',
          }}
        />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`
