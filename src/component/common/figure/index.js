import styled from 'styled-components'

// 쓸만한 도형들 모아둠
export const SpeechBubble = ({ width, height, color, component }) => {
  return (
    <Wrapper width={width} height={height} color={color}>
      <span>{component}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  padding-top: 10px;
  color: rgb(150, 150, 150);
  border-radius: 5px;
  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 2px;
    border-bottom: 7px solid ${(props) => props.color};
    border-top: 7px solid rgba(0, 0, 0, 0);
    border-left: 7px solid rgba(0, 0, 0, 0);
    border-right: 7px solid rgba(0, 0, 0, 0);
    position: absolute;
    top: -15px;
    right: 60px;
  }
`
