import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { InnerLayout } from "./Layout";
import ReviewCard from "./subcomponents/ReviewCard";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const ReviewSection = () => {
  const scrollLeftHander = () => {
    const reviewsBox = document.querySelector(".reviews");
    const width = reviewsBox.clientWidth
    reviewsBox.scrollLeft = reviewsBox.scrollLeft - width;
  };

  const scrollRightHandler = () => {
     const reviewsBox = document.querySelector(".reviews");
      const width = reviewsBox.clientWidth;
     reviewsBox.scrollLeft = reviewsBox.scrollLeft + width;
  };
  return (
    <ReviewSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="review_cont">
          <div className="leftBtn" onClick={scrollLeftHander}>
            <FiChevronLeft size={30} />
          </div>
          <div className="rightBtn" onClick={scrollRightHandler}>
            <FiChevronRight size={30} />
          </div>
          <div className="reviews">
            <ReviewCard
              text={
                "Prasad is a good developer jh0pekljj sdkljf lsjflksdjf dlsjf kldsjf dsjkflkdsj fjsdlk fcdlsj ;dlkf dslkfl;ksdf ksdf"
              }
              reviewer={"Pratyush"}
            />
            <ReviewCard
              text={
                "Prasad is a good developer jh0pekljj sdkljf lsjflksdjf dlsjf kldsjf dsjkflkdsj fjsdlk ffdkljkds fkljdfs kjd sfkj lksdfj  dsfkl"
              }
              reviewer={"Pratyush"}
            />
            <ReviewCard
              text={
                "Prasad is a good developer jh0pekljj sdkljf lsjflksdjf dlsjf kldsjf dsjkflkdsj fjsdlk ffdkljkds fkljdfs kjd sfkj lksdfj  dsfkl"
              }
              reviewer={"Pratyush"}
            />
            <ReviewCard
              text={
                "Prasad is a good developer jh0pekljj sdkljf lsjflksdjf dlsjf kldsjf dsjkflkdsj fjsdlk ffdkljkds fkljdfs kjd sfkj lksdfj  dsfkl"
              }
              reviewer={"Pratyush"}
            />
            <ReviewCard
              text={
                "Prasad is a good developer jh0pekljj sdkljf lsjflksdjf dlsjf kldsjf dsjkflkdsj fjsdlk ffdkljkds fkljdfs kjd sfkj lksdfj  dsfkl"
              }
              reviewer={"Pratyush"}
            />
          </div>
        </div>
      </InnerLayout>
    </ReviewSectionStyled>
  );
};

const ReviewSectionStyled = styled.section`
  .review_cont {
    margin-top: 2rem;
    position: relative;
  }
  .leftBtn {
    position: absolute;
    left: 0;
    top: 40%;
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
    top: 40%;
    text-align: center;
    background-color: var(--primary-color-hover);
    padding: 0.3rem;
    border-radius: 5px;
    z-index: 10;
  }

  .reviews {
    display: flex;
    width: 90%;
    margin: auto;
    gap: 1.5rem;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .reviews::-webkit-scrollbar {
    display: none;
  }
`;

export default ReviewSection;
