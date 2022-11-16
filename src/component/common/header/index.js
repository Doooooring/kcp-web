import styled from 'styled-components'
import Login from '@pages/'
import { Link, NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { RiHome5Line } from 'react-icons/ri'
import { TiChevronRight } from 'react-icons/ti'

function Header(props) {
  const { curPage, handlecurPage } = props
  const [curClicked, handleCurClicked] = useState('')
  const imageCategories = useRef(['imBuilder', 'imMonitor'])
  const containerCategories = useRef([])
  return (
    <Wrapper>
      <ImageWrapper>
        <IconContext.Provider
          value={{
            color: 'white',
            height: '190px',
            width: '100px',
          }}
        >
          <RiHome5Line />
        </IconContext.Provider>
      </ImageWrapper>
      <Category>
        <ImageCategoryName
          onClick={() => {
            if (curClicked === 'images') {
              handleCurClicked('')
            } else {
              handleCurClicked('images')
            }
          }}
        >
          Images
          {/** 
          <IconContext.Provider
          value={{
            display: 'none',
            color: 'white',
            height: '190px',
            width: '100px',
          }}
          >
          <TiChevronRight />
          </IconContext.Provider>
        */}
          <Categories>
            <NavWrapper>
              <Navigation
                to="/contents/image/build"
                onClick={() => {
                  handlecurPage('imBuilder')
                }}
              >
                Build
              </Navigation>
            </NavWrapper>
            <NavWrapper>
              <Navigation
                to="/contents/image/monitor"
                onClick={() => {
                  handlecurPage('imMonitor')
                }}
              >
                Monitor
              </Navigation>
            </NavWrapper>
          </Categories>
        </ImageCategoryName>
        {/** 카테고리 클릭시 세부 카테고리 보여줌 */}
      </Category>
      <Category>
        <ContainerCategoryName
          onClick={() => {
            if (curClicked === 'container') {
              handleCurClicked('')
            } else {
              handleCurClicked('container')
            }
          }}
        >
          Containers
          <Categories>
            <NavWrapper>
              <Navigation
                to="/contents/container/handle"
                onClick={() => {
                  handlecurPage('conHandler')
                }}
              >
                Build
              </Navigation>
            </NavWrapper>
            <NavWrapper>
              <Navigation
                to="/contents/container/monitor"
                onClick={() => {
                  handlecurPage('conMonitor')
                }}
              >
                Monitor
              </Navigation>
            </NavWrapper>
          </Categories>
        </ContainerCategoryName>
      </Category>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: columns;
  align-items: center;
  height: 50px;
  background-color: black;
  padding-left: 10px;
  z-index: 3;
`
const ImageWrapper = styled.div`
  margin-right: 10px;
`

const Category = styled.div`
  display: inline-block;
  height: 50px;
  text-align: center;
`
const Categories = styled.ul``

const NavWrapper = styled.li`
  padding: 5px;
`

const Navigation = styled(NavLink)``

const CategoryName = styled.div`
  position: relative;
  display: inline-block;
  color: lightgrey;
  font-size: 20px;
  width: 200px;
  height: 30px;
  padding-top: 15px;
  z-index: 3;
  ul {
    color: lightgrey;
    background-color: black;
    padding: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
    a {
      text-decoration: none;
      color: grey;
    }
    li {
      &:hover {
        background-color: rgb(40, 40, 40);
      }
    }
  }
  &:hover ul {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`
const ImageCategoryName = styled(CategoryName)`
  font-weight: ${({ $curClicked }) =>
    $curClicked === 'image' ? '500' : '700'};
`
const ContainerCategoryName = styled(CategoryName)`
  font-weight: ${({ $curClicked }) =>
    $curClicked === 'container' ? '500' : '700'};
`
