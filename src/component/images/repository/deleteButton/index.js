import styled from "styled-components";

import imageServices from "@services/imageServices";

import { BiTrash } from "react-icons/bi";

export default function DeleteButton({ setCurRepositories, selectedRepo }) {
  return (
    <Wrapper
      onClick={() => {
        imageServices.deleteRepositories(setCurRepositories, selectedRepo);
      }}
    >
      <BiTrash />
    </Wrapper>
  );
}

const Wrapper = styled.button``;
