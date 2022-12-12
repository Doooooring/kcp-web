import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";

import imageServices from "@services/imageServices";
import { AiOutlineTool } from "react-icons/ai";

export default function BuildRepository() {
  return (
    <NavLink to="/contents/image/create-repository">
      <Wrapper>
        <AiOutlineTool />
      </Wrapper>
    </NavLink>
  );
}

const Wrapper = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
