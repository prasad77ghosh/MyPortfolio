import React from "react";
import styled from "styled-components";
const ServiceCard = ({ Image, Title, Paragraph }) => {
  return (
    <>
      <ServiceCardStyled>
        <div className="container">
          <img src={Image} alt="serviceImg" className="servImg" />
          <h3 className="title">{Title}</h3>
          <p className="para">{Paragraph}</p>
        </div>
      </ServiceCardStyled>
    </>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-radius: 5px;
  .container {
    max-width: 30rem;
    min-width: 30rem;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default ServiceCard;
