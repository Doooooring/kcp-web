import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { GoTriangleRight } from 'react-icons/fa'
import url from '@asset/url/urls/js'

function parentBox(title, childList, clicked, handleClicked) {
  return (
    <parentWrapper>
      <parentTitle
        onClick={() => {
          handleClicked(!clicked)
        }}
      >
        <GoTriangleRight
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

export default function Sidebar() {
  return <barWrapper></barWrapper>
}

const barWrapper = styled.div``
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
