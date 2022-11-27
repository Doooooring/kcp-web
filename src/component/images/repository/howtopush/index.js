import styled from "styled-components";

export default function HowToPush({ setModalUp }) {
  return (
    <Wrapper
      onClick={() => {
        setModalUp(true);
      }}
    >
      how to push
    </Wrapper>
  );
}

const Wrapper = styled.button``;
