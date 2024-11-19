import styled from "styled-components";

import Header from "../components/Header";
import Greetings from "../components/Greetings";
import Works from "../components/Works";
import { useEffect, useState } from "react";
import { useMotionValue, useScroll, useTransform, motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  padding: 0px 30px 30px 0px;
`;
const Img = styled.img``;

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scrollBgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#dd10e1", "#edfb33"]
  );

  return (
    <Container style={{ backgroundColor: scrollBgColor }}>
      {loading ? (
        "Wait a minute..!"
      ) : (
        <div>
          <Header />
          <Greetings />
          <Works />
        </div>
      )}
    </Container>
  );
}

export default Home;
