import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { TiChevronRight } from 'react-icons/ti'
import { HiChevronDoubleRight } from 'react-icons/hi'
import url from '@asset/url'

function ParentBox(title, childList, clickDict, handleClicked) {
  return (
    <parentWrapper>
      <parentTitle
        onClick={() => {
          const curState = clickDict[title]
          handleClicked({ ...clickDict, title: !curState })
        }}
      >
        <TiChevronRight
          style={{
            transform: clickDict[title] ? 'rotate(90deg)' : 'rotate(0deg)',
            transitionDelay: '0.5s',
          }}
        />
        {title}
      </parentTitle>
      <childNodes style={{ display: clickDict[title] ? 'block' : 'none' }}>
        {childList.map((comp) => {
          if (comp['state'] === 'parent') {
            return (
              <ParentBox
                title={comp['title']}
                childList={comp['childList']}
                clickDict={clickDict}
                handleClicked={handleClicked}
              />
            )
          } else {
            return <ChildBox title={comp['title']} link={comp['link']} />
          }
        })}
      </childNodes>
    </parentWrapper>
  )
}

function ChildBox(title, link) {
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

//Find all the keys in dictionary
function findTitle(dict) {
  const result = []
  for (let key of Object.keys(dict)) {
    result.push(key)
    if ('childList' in dict[key]) {
      dict[key]['childList'].forEach((comp) => {
        result += findTitle(comp)
      })
    }
  }
  return result
}

/**
 * sideList -> [{sideComp}, {sideComp}, ...]
 * sideComp -> { state : (parent or child)}
 * if parent : {state : parent, title : 'title', childList : [parent, child ... ] }
 *
 */
export default function Sidebar({ sideDict }) {
  const [curClicked, handleCurClicked] = useState({})
  const titleList = useRef()

  useEffect(() => {
    const keyList = findTitle(sideDict)
    const keyDict = {}
    keyList.forEach((comp) => {
      keyDict[comp] = false
      handleCurClicked(keyDict)
    })
  })

  return (
    <BarWrapper>
      <IconContext.Provider value={{ color: 'grey', size: '20px' }}>
        <HiChevronDoubleRight />
      </IconContext.Provider>
      <BarContainer>
        {sideDict.map((comp) => {
          return
        })}
      </BarContainer>
    </BarWrapper>
  )
}

const BarWrapper = styled.div`
  width: 80px;
  height: 1000px;
  border-right: 1px solid lightgrey;
  background-color: white;
  margin: 0;
  padding-top: 20px;
  text-align: center;
`
const BarContainer = styled.div``
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
