import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import profileImg from "../images/MyProfile.png";
import { motion } from "framer-motion";
const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="avatar">
        <img src={profileImg} alt="profileImage" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios">Portfolios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs">Notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          @2021 <b>Lorem Ipsum</b>
        </p>
      </footer>
    </NavigationStyle>
  );
};

const NavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    cursor: pointer;
    img {
      width: 85%;
      border-radius: 50%;
      border: 3px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .active {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        font-size: 1.6rem;
        padding: 1.7rem 4rem;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.3rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
