import React from "react";
import styled from "styled-components";
import AboutProfile from "../images/mainProfile.png";
const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left_cont">
        <img src={AboutProfile} alt="aboutImage" />
      </div>
      <div className="right_cont">
        <h4>
          My name is <span>Prasad</span>
        </h4>
        <p className="description">
          I am a Self-Tought passionate Developer, programmer and coder. I am
          interested in Web-Development, Artificial-Intelligence(AI) and
          Machine-Learning(ML) ..
        </p>
        <div className="about_info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Prasad Ghosh</p>
            <p>: 22 Years</p>
            <p>: Indian</p>
            <p>: Odia, Hindi, English</p>
            <p>: India, Bhubeneswar</p>
            <p>: Software Developement</p>
          </div>
        </div>
        <div className="cv_btn">
          <button>Download My CV</button>
        </div>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  display: flex;
  gap: 2rem;
  width: 90%;
  margin: auto;
  margin-top: 5rem;
  .left_cont {
    width: 100%;
    background-color: var(--background-dark-grey);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .right_cont {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    h4 {
      font-size: 4rem;
      color: var(--white-color);
      span {
        color: var(--primary-color);
      }
    }
    .description {
      font-size: 2rem;
    }
    .about_info {
      display: flex;
      font-size: 1.7rem;
      gap: 2rem;
      P {
        margin-top: 1.3rem;
      }
    }
    .info-title {
      color: var(--primary-color);
    }

    .cv_btn {
      width: 100%;
      button {
        width: 80%;
        padding: 1.5rem 1rem;
        font-size: 2rem;
        margin-top: 1.5rem;
        border-radius: 5px;
        background-color: var(--primary-color-light);
        font-weight: bold;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      button:hover {
        background-color: var(--primary-color-hover);
      }
    }
  }
`;

export default ImageSection;
