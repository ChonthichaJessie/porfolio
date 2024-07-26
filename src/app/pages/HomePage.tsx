"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import aboutMe from "../components/aboutMe.json";
import nameTitle from "../assets/title.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import githubLogo from "../assets/githubLogo.png";

const HomePage = () => {
  return (
    <Wrapper>
      <ProfileSection>
        <ProfilePicture
          src="https://avatars.githubusercontent.com/u/124099512?v=4"
          alt="profile picture"
        />
      </ProfileSection>
      <h6>Hello</h6>
      <h6>I&apos;m Jessie</h6>
      <h6>a Frontend Developer</h6>
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
    </Wrapper>
  );
};

export default HomePage;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 350px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Introduction = styled.div`
  text-align: center;
  max-width: 600px;
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
