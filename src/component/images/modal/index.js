import styled from "styled-components";

import CliContainer from "@component/images/modal/cliContainer";

function modalDown(event, setModalUp) {
  if (event.target === event.currentTarget) {
    setModalUp(false);
  }
  return;
}

export default function Modal({ modalUp, setModalUp, userId, repositoryName }) {
  return (
    <Wrapper
      modalUp={modalUp}
      onClick={(e) => {
        modalDown(e, setModalUp);
      }}
    >
      <CliContainer userId={userId} repositoryName={repositoryName} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(50px);
  top: ${(props) => (props.modalUp ? 0 : "100%")};
  opacity: ${(props) => (props.modalUp ? 1 : 0)};
  pointer-events: ${(props) => (props.modalUp ? "auto" : "none")};
`;
