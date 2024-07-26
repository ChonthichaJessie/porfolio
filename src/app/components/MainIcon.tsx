import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  fortawesomeTitle: IconProp;
  color: string;
};

const MainIcon = ({ fortawesomeTitle, color}: Props) => {
  return (
    <Wrapper>
      <StyledIcon icon={fortawesomeTitle} size="3x" color={color} />
    </Wrapper>
  );
};

export default MainIcon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ensure the content is centered vertically */
  padding: 20px;
  border-radius: 50%;
  height: 10vh;
  background-color: #6c6868;
  width: 10vh; /* Ensure the width also covers the viewport width */
`;
const StyledIcon = styled(FontAwesomeIcon)<{ color: string }>`
  color: ${({ color }) => color};
`;
