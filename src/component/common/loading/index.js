import styled from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function LaodingPage() {
  return (
    <Wrapper>
      <AiOutlineLoading3Quarters style={{}} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  transform: rotate(359deg);
  transition-duration: 5s;
`
