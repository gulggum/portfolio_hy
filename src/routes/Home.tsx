import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Greetings from "../components/Greetings";
import Works from "../components/Works";
import Skill from "../components/Skill";

const Container = styled(motion.div)``;

const HomeWrapper = styled(motion.div)``;

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? (
        "Wait a minute..!"
      ) : (
        <HomeWrapper>
          <Header />
          <Greetings />
          <Skill />
          <Works />
        </HomeWrapper>
      )}
    </Container>
  );
}

export default Home;
