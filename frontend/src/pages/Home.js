import React from "react";
import styled from "styled-components";
import Particle from "../components/Particle";
import { FiCodesandbox } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <HomeComp>
        <Particle />
        <div className="hero_cont">
          <h1>
            Hii, I'm <span>Prasad Ghosh</span>
          </h1>
          <h2>A Fullstack Developer & Coder..</h2>
          <div className="intro">
            <p>
              I am a self tought programmer with out any Engineering Degree & I
              love to building things ..
            </p>
          </div>
          <div className="social_links">
            <div className="social_cont">
              <a
                href="https://www.linkedin.com/in/prasad-ghosh-190873220/"
                target="_blank"
              >
                <FiLinkedin size={23} />
              </a>
              <a href="https://twitter.com/PrasadG92775523" target="_blank">
                <FiTwitter size={23} />
              </a>
              <a href="https://github.com/prasad77ghosh" target="_blank">
                <FiGithub size={23} />
              </a>
              <a href="">
                <FiInstagram size={23} />
              </a>
              <a href="https://codesandbox.io/u/prasad77ghosh" target="_blank">
                <FiCodesandbox size={23} />
              </a>
            </div>

            <button className="cv_btn">Download CV</button>
          </div>
        </div>
      </HomeComp>
    </>
  );
};

const HomeComp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .hero_cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--white-color);
    h1 {
      font-size: 7rem;
      span {
        color: var(--primary-color);
      }
    }
  }
  .intro {
    width: 40%;
    text-align: center;
    margin-top: 2rem;
    p {
      font-size: 1.7rem;
    }
  }

  .social_links {
    display: flex;
    gap: 3rem;
    margin-top: 2.5rem;
    .social_cont {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-top: 0.8rem;
      a:hover {
        color: var(--primary-color);
      }
    }
    .cv_btn {
      padding: 1.3rem 2rem;
      cursor: pointer;
      background-color: var(--primary-color);
      font-size: 17px;
      border-radius: 8px;
      font-weight: 600;
      color: var(--white-color);
      transition: all 0.3s ease-in-out;
    }

    .cv_btn:hover {
      background-color: var(--primary-color-hover);
    }
  }
`;

export default Home;
