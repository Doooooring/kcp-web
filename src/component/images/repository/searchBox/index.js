import styled from 'styled-components'

import { IconContext } from 'react-icons'
import { BiSearchAlt2 } from 'react-icons/bi'

export default function SearchBox({ searchWord, setSearchWord }) {
  return (
    <Wrapper>
      <IconContext.Provider
        value={{
          size: '25px',
        }}
      >
        <BiSearchAlt2 />
      </IconContext.Provider>
      <InputBox
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      ></InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  height: 35px;
  align-items: center;
  border: 1px solid lightgrey;
  padding-left: 10px;
`

const InputBox = styled.input`
  display: inline-block;
  width: 200px;
  height: 25px;
  font-size: 15px;
  border: 0px solid lightgrey;
`
