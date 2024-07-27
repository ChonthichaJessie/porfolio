"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MainIcon from "./MainIcon";
import { motion } from "framer-motion";

const SubIcons = () => {
  return (
    <Wrapper>
      <motion.div
        className="hidden-icons"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <StyledLink href="/">
          <MainIcon fortawesomeTitle={faHouse} color="pink" />
        </StyledLink>
        <StyledLink href="/pages/resume">
          <MainIcon fortawesomeTitle={faFile} color="pink" />
        </StyledLink>
        <StyledLink href="/pages/contact">
          <MainIcon fortawesomeTitle={faEnvelope} color="pink" />
        </StyledLink>
        <StyledLink href="">
          <MainIcon fortawesomeTitle={faBars} color="pink" />
        </StyledLink>
      </motion.div>
    </Wrapper>
  );
};

export default SubIcons;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  opacity: 0.5;
  transition: opacity 0.3s;
  margin: 20px;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
