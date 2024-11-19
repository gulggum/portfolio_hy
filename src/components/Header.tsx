import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
const HeaderBox = styled.div`
  position: fixed;
  top: 0px;
  padding: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  border-bottom: 2px solid #333;
  background-color: aliceblue;
  width: 100%;
`;

const Name = styled.h1`
  padding: 10px;
  font-size: 50px;
  font-weight: 600;
  grid-column: span 2;
`;
const Nav = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FanLogo = styled(motion.svg)`
  width: 50px;
  fill: orange;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  border-radius: 50%;
`;
const Menu = styled.li`
  padding: 10px;
  cursor: pointer;
`;

const Blank = styled.div``;

function Header() {
  const { scrollYProgress } = useScroll();
  const scrollFan = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <>
      <HeaderBox>
        <Name>Heeyeoun Lee</Name>
        <Blank></Blank>
        <Blank></Blank>
        <Nav>
          <FanLogo
            style={{ rotateZ: scrollFan }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224l-2.6 0C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480l0 2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288l2.6 0c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32l0-2.6C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </FanLogo>
          <Menu>
            <Avatar
              src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/lhyto1234-1718000814.jpg"
              alt=""
            />
          </Menu>
          <Menu>
            <Link to={"/about"}>About</Link>
          </Menu>
          <Menu>Work</Menu>
          <Menu>Contact</Menu>
        </Nav>
      </HeaderBox>
    </>
  );
}

export default Header;
