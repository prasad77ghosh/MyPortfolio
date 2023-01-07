import React from "react";
import styled from "styled-components";
const ReviewCard = ({ text, reviewer }) => {
  return (
    <>
      <ReviewCardStyled>
        <p className="review">{text}</p>
        <span className="reviewer">by {reviewer}</span>
      </ReviewCardStyled>
    </>
  );
};

const ReviewCardStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  max-width: 55rem;
  min-width: 55rem;
  .review {
    font-size: 17px;
  }

  .reviewer {
    font-size: 14px;
    display: inline-block;
  }
  &:not(:first-child) {
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent
      var(--background-dark-grey);
  }
  p {
    padding: 1rem 0;
  }
`;

export default ReviewCard;
