import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { TiChevronRight } from 'react-icons/ti'
import { HiChevronDoubleRight } from 'react-icons/hi'
import url from '@asset/url'

function parentBox(title, childList, clicked, handleClicked) {
  return (
    <parentWrapper>
      <parentTitle
        onClick={() => {
          handleClicked(!clicked)
        }}
      >
        <TiChevronRight
          style={{
            transform: clicked ? 'rotate(90deg)' : 'rotate(0deg)',
            transitionDelay: '0.5s',
          }}
        />
        {title}
      </parentTitle>
      <childNodes style={{ display: clicked ? 'block' : 'none' }}>
        {childList.map((comp) => {
          return comp
        })}
      </childNodes>
    </parentWrapper>
  )
}

function childBox(title, link) {
  return (
    <childWrapper>
      <NavLink to={link} style={getLinkStyle}>
        {title}
      </NavLink>
    </childWrapper>
  )
}

function getLinkStyle({ isActive }) {
  return {
    backgroundColor: isActive ? 'ligthgrey' : 'white',
  }
}

export default function Sidebar({ sideList }) {
  return (
    <BarWrapper>
      <IconContext.Provider
        value={{ color: 'grey', height: '190px', width: '100px' }}
      >
        <HiChevronDoubleRight />
      </IconContext.Provider>
      <barContainer></barContainer>
    </BarWrapper>
  )
}

const BarWrapper = styled.div`
  width: 80px;
  height: 1000px;
  background-color: black;
  text-align: center;
`
const parentWrapper = styled.div``
const parentTitle = styled.p`
  display: inline-block;
  &:hover {
    background-color: lightgrey;
  }
`
const childNodes = styled.div`
  padding-left: 10px;
`
const childWrapper = styled.p`
  display: inline-block;
  & ~ Link {
    text-decoration: none;
  }
`
