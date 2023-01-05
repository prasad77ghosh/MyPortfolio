import React from "react";
import { InnerLayout } from "./Layout";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../images/design.svg";
import Intelligence from "../images/intelligence.svg";
import gameDev from "../images/game-dev.svg";

const ServiceSection = () => {
  return (
    <>
      <InnerLayout>
        <ServiceSectionStyle>
          <Title title={"Services"} span={"Services"} />
          <div className="services">
            <ServiceCard
              Image={design}
              Title={"WebDesign"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto ghjhgj ghjhgjhgj ghj."
              }
            />
            <ServiceCard
              Image={Intelligence}
              Title={"Artificial Intelligence"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iustoghjhgjhg fgjhgj hjhgjhg ."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
            <ServiceCard
              Image={gameDev}
              Title={"Game Development"}
              Paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi dolore ullam asperiores iusto hgjhg ghjhghjhgj."
              }
            />
          </div>
        </ServiceSectionStyle>
      </InnerLayout>
    </>
  );
};

const ServiceSectionStyle = styled.div`
.services{
  width: 90%;
  padding: 1rem;
  margin: auto;
  display: flex;
  margin-top: 6rem;
  overflow-x: scroll;
  gap: 1.3rem;
}
`;
export default ServiceSection;
