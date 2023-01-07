import React from "react";
import { InnerLayout } from "./Layout";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./subcomponents/ServiceCard";
import design from "../images/design.svg";
import Intelligence from "../images/intelligence.svg";
import gameDev from "../images/game-dev.svg";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const ServiceSection = () => {
  const scrollLeftHander = () => {
    const serviceBox = document.querySelector(".services");
    const width = serviceBox.clientWidth;
    serviceBox.scrollLeft = serviceBox.scrollLeft - width;
  };

  const scrollRightHandler = () => {
    const serviceBox = document.querySelector(".services");
    const width = serviceBox.clientWidth;
    serviceBox.scrollLeft = serviceBox.scrollLeft + width;
  };
  return (
    <>
      <InnerLayout>
        <ServiceSectionStyle>
          <Title title={"Services"} span={"Services"} />
          <div className="service_cont">
            <div className="leftBtn" onClick={scrollLeftHander}>
              <FiChevronLeft size={30} />
            </div>
            <div className="rightBtn" onClick={scrollRightHandler}>
              <FiChevronRight size={30} />
            </div>
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
            </div>
          </div>
        </ServiceSectionStyle>
      </InnerLayout>
    </>
  );
};

const ServiceSectionStyle = styled.div`
  .service_cont {
    padding: 0.5rem;
    position: relative;
    .leftBtn {
      position: absolute;
      left: 0;
      top: 53%;
      text-align: center;
      background-color: var(--primary-color-hover);
      padding: 0.3rem;
      border-radius: 5px;
      cursor: pointer;
      z-index: 10;
    }
    .rightBtn {
      position: absolute;
      right: 0;
      top: 53%;
      text-align: center;
      background-color: var(--primary-color-hover);
      padding: 0.3rem;
      border-radius: 5px;
      z-index: 10;
    }

    .services {
      width: 90%;
      margin: auto;
      display: flex;
      margin-top: 6rem;
      overflow-x: scroll;
      gap: 1.3rem;
    }

    .services::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default ServiceSection;
