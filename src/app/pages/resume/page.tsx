"use client";
import React from "react";
import styled from "styled-components";
import resumeData from "../../components/resume.json";
import InitialIcon from "../../components/InitialIcon";
import SubIcons from "../../components/SubIcons";

const ResumePage = () => {
  return (
    <Wrapper>
      <MiddleSection>
        <PinkTitle>My Resume</PinkTitle>
        <ContentWrapper>
          <Section>
            <SectionTitle>Objective</SectionTitle>
            <p>{resumeData.objective}</p>
          </Section>
          <Section>
            <SectionTitle>Education</SectionTitle>
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index}>
                <p>
                  <strong>{edu.degree}</strong>
                </p>
                <p>{edu.institution}</p>
                <p>{edu.years}</p>
              </EducationItem>
            ))}
          </Section>
          <Section>
            <SectionTitle>Skills</SectionTitle>
            {Object.entries(resumeData.skills).map(
              ([skillType, skills], index) => (
                <SkillsList key={index}>
                  <p>
                    <strong>{skillType.replace(/_/g, " ")}</strong>
                  </p>
                  <ul>
                    {skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </SkillsList>
              )
            )}
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index}>
                <p>
                  <strong>{exp.role}</strong>
                </p>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <ul>
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </ExperienceItem>
            ))}
          </Section>
          <Section>
            <SectionTitle>Certifications and Training</SectionTitle>
            {resumeData.certifications_and_additional_training.map(
              (cert, index) => (
                <CertificationItem key={index}>
                  <p>
                    <strong>{cert.certification || cert.course}</strong>
                  </p>
                  <p>{cert.status}</p>
                </CertificationItem>
              )
            )}
          </Section>
          <Section>
            <SectionTitle>Professional Development</SectionTitle>
            {resumeData.professional_development.map((dev, index) => (
              <DevelopmentItem key={index}>
                <p>{dev.description}</p>
                <p>{dev.status}</p>
              </DevelopmentItem>
            ))}
          </Section>
          <Section>
            <SectionTitle>Additional Information</SectionTitle>
            {resumeData.additional_information.map((info, index) => (
              <InfoItem key={index}>
                <p>
                  <strong>{info.interest || info.eagerness_to_learn}</strong>
                </p>
                <p>{info.description}</p>
              </InfoItem>
            ))}
          </Section>
        </ContentWrapper>
        <DownloadResumeLink href="/JessieCh.pdf" download>
          Download My Resume in PDF
        </DownloadResumeLink>
      </MiddleSection>
      <Footer>
        <InitialIconWrapper>
          <InitialIcon />
        </InitialIconWrapper>

        <SubIconsWrapper>
          <SubIcons />
        </SubIconsWrapper>
      </Footer>
    </Wrapper>
  );
};

export default ResumePage;

const PinkTitle = styled.h6`
  color: #ff69b4;
  font-weight: 800;
  font-size: 2.5rem;
  font-family: "Courier New", Courier, monospace;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SubIconsWrapper = styled.div`
  position: fixed;
  bottom: 2%;
  right: 5%;
`;
const InitialIconWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  min-height: 100vh;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
  min-height: 100vh;
  width: 60%;
`;

const DownloadResumeLink = styled.a`
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #f6c3cc;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ee74b2;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  margin-bottom: 10px;
`;

const EducationItem = styled.div`
  margin-bottom: 10px;
`;

const SkillsList = styled.div`
  margin-bottom: 10px;

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 10px;

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

const CertificationItem = styled.div`
  margin-bottom: 10px;
`;

const DevelopmentItem = styled.div`
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
`;
