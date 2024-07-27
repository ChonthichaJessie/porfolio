"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import aboutMe from "../../components/aboutMe.json";
import linkedinLogo from "../../assets/linkedinLogo.png";
import githubLogo from "../../assets/githubLogo.png";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import MainIcon from "../../components/MainIcon";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Wrapper>
      <LeftSection />
      <MiddleSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0.5,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <TopSection>
            <Greetings>
              <GreyTitle>Hello</GreyTitle>
              <PinkTitle>I&apos;m Jessie Ch.</PinkTitle>
              <GreyTitle>a Frontend Developer</GreyTitle>
            </Greetings>
            <ProfileSection>
              <ProfilePicture
                src="https://media.licdn.com/dms/image/D5603AQFwWIrmVRibvw/profile-displayphoto-shrink_800_800/0/1676305948458?e=1727308800&v=beta&t=0kWArMYbJi7SEGLYsinypOVsaOu443Vn9y878jfTAdY"
                alt="profile picture"
              />
            </ProfileSection>
          </TopSection>
        </motion.div>
        <Introduction>
          <IntroText>{aboutMe.about_me.introduction}</IntroText>
        </Introduction>
        <IconsWrapper>
          <IconLink href="https://github.com/ChonthichaJessie" target="_blank">
            <Image src={githubLogo} alt="github" width={50} height={50} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/chonthicha-paingam/"
            target="_blank"
          >
            <Image src={linkedinLogo} alt="linkedin" width={50} height={50} />
          </IconLink>
        </IconsWrapper>
      </MiddleSection>
      <RightSection>
        <StyledLink href="/pages/resume/page">
          <MainIcon fortawesomeTitle={faFile} color="pink" />
        </StyledLink>
      </RightSection>
    </Wrapper>
  );
};

export default HomePage;

const StyledLink = styled(Link)`
  opacity: 0.5;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 70%;
`;

const GreyTitle = styled.h6`
  font-size: 2.5rem;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
`;

const PinkTitle = styled.h6`
  color: #ff69b4;
  font-weight: 800;
  font-size: 2.5rem;
  font-family: "Courier New", Courier, monospace;
`;

const Greetings = styled.div`
  padding: 30px;
  margin: 10px 0;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const IconLink = styled.a`
  margin: 0 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  min-height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 25vh;
  width: 25vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Introduction = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  line-height: 1.6;
  margin: 10px 0;
`;
