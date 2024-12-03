import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Greetings from "../components/Greetings";
import AboutMe from "../components/AboutMe";
import Skill from "../components/Skill";
import Works from "../components/Works";
import Contact from "../components/Contact";

const Container = styled(motion.div)`
  width: 100%;
  background: linear-gradient(to right, #00b4db, #0083b0);
`;

const Loader = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #00b4db;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeWrapper = styled(motion.div)``;

const Main = styled.div`
  padding: 20px 0px;
`;

const loadVariant = {
  start: { scaleX: 0 },
  end: {
    scaleX: 1,
    transition: {
      duration: 2,
    },
  },
};

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  console.log(loading);

  return (
    <Container>
      {loading ? (
        <Loader
          variants={loadVariant}
          initial="start"
          animate="end"
          exit="start"
        >
          <span> Loading...</span>
        </Loader>
      ) : (
        <HomeWrapper>
          <Header />
          <Greetings />
          <Main>
            <AboutMe />
            <Skill />
            <Works />
            <Contact />
          </Main>
        </HomeWrapper>
      )}
    </Container>
  );
}

export default Home;
