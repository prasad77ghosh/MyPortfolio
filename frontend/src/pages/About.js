import React from "react";
import styled from "styled-components";
import { MainLayout } from "../components/Layout";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import ServiceSection from "../components/ServiceSection";
const About = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServiceSection />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section``;

export default About;
