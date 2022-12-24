import React from "react";
import styled from "styled-components";
import Particle from "../components/Particle";
const Home = () => {
  return (
    <>
      <HomeComp>
        <Particle />
      </HomeComp>
    </>
  );
};

const HomeComp = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Home;
