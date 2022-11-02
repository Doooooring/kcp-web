import styled from 'styled-components'
import Login from '@pages/'
import { Link, NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'

function Header(props) {
  const { curSide, handleCurSide } = props
  const [curClicked, handleCurClicked] = useState('')
  const imageCategories = useRef(['imBuilder', 'imMonitor'])
  const containerCategories = useRef([])
  return (
    <Wrapper>
      <Category>
        <CategoryName
          style={{
            color: imageCategories.current.includes(curSide) ? 'grey' : 'black',
          }}
          onClick={() => {
            handleCurClicked('images')
          }}
        >
          Images
        </CategoryName>
        <Categories
          style={{
            display: curClicked === 'images' ? 'div' : 'none',
          }}
        >
          <NavLink
            to="/contents/image/build"
            style={{ color: curSide === 'imBuilder' ? 'black' : 'grey' }}
            onClick={() => {
              handleCurSide('imBuilder')
              handleCurClicked('')
            }}
          >
            Build
          </NavLink>
          <NavLink
            to="/contents/image/monitor"
            style={{ color: curSide === 'imMonitor' ? 'black' : 'grey' }}
            onClick={() => {
              handleCurSide('imMonitor')
              handleCurClicked('')
            }}
          >
            Monitor
          </NavLink>
        </Categories>
      </Category>
      <Category>
        <CategoryName
          style={{
            color: containerCategories.current.includes(curSide)
              ? 'grey'
              : 'black',
          }}
        >
          Containers
        </CategoryName>
        <Categories></Categories>
      </Category>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header``

const Category = styled.p`
  display: 'inline';
`
const Categories = styled.div``
const CategoryName = styled.p`
  display: 'inline';
`
