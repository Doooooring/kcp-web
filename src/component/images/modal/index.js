import styled from 'styled-components'

import imageServices from '@services/imageServices'

export default function Modal({ modalUp, setModalUp }) {
  return <Wrapper modalUp={modalUp}>
    
  </Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  backdrop-filter: blur(50px);
  opacity: ${(props) => (props.modalUp ? 1 : 0)};
  pointer-events: ${(props) => (props.modalUp ? 'none' : 'auto')};
`
