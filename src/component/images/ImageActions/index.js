import styled from "styled-components";
import { Link } from "react-router-dom";
import { SpeechBubble } from "@component/common/figure";
import { AiOutlineCaretRight, AiOutlineEllipsis } from "react-icons/ai";

export default function ImageActions({ imageId }) {
  return (
    <Wrapper>
      <IconWrapper>
        <AiOutlineCaretRight
          style={{
            fontSize: "25px",
          }}
        />
      </IconWrapper>
      <IconWrapper>
        <AiOutlineEllipsis style={{ fontSize: "25px" }} />
      </IconWrapper>
      <BubbleWrapper>
        <SpeechBubble
          height="40px"
          width="180px"
          color="rgb(230, 230, 230)"
          component={"Move on repository"}
        />
      </BubbleWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  &:hover {
    cursor: pointer;
    div {
      opacity: 100%;
    }
  }
  div {
    position: relative;
    top: 10px;
    left: -40px;
    opacity: 0;
    pointer-events: none;
    z-index: 9;
  }
`;

const IconWrapper = styled.span`
  font-size: 25px;
  border-radius: 10px;
  padding-top: 5px;
  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;

const BubbleWrapper = styled.div``;
