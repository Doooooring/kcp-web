import styled from 'styled-components'

import { Link, NavLink } from 'react-router-dom'

import imageServices from '@services/imageServices'
import { AiOutlineTool } from 'react-icons/ai'

export default function BuildRepository() {
  return (
    <Wrapper>
      <NavLink to="/contents/image/create-repository">
        <AiOutlineTool />
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.button``
