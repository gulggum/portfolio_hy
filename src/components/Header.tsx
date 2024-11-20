import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const HeaderBox = styled(motion.div)`
  width: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  margin: 20px 0px;
  text-align: center;
`;

const Name = styled.h1`
  padding: 10px;
  font-size: 30px;
  font-weight: 600;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Menu = styled.li`
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  width: 110px;
  font-size: 18px;
`;

const FanLogo = styled(motion.svg)`
  width: 50px;
  fill: orange;
  margin-right: 10px;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #ff6600;
    text-decoration: underline;
  }
`;

function Header() {
  const { scrollYProgress } = useScroll();
  const scrollFan = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scrollHeaderFixed = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["absolute", "fixed"]
  );
  const scrollHeaderBgColor = useTransform(
    scrollYProgress,
    [0, 1],
    [" inherit", "#fff"]
  );

  const scrollBoxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [0, "0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06)"]
  );
  return (
    <HeaderBox
      style={{
        position: scrollHeaderFixed,
        background: scrollHeaderBgColor,
        boxShadow: scrollBoxShadow,
      }}
    >
      <HeaderLeft>
        <FanLogo
          style={{ rotateZ: scrollFan }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224l-2.6 0C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480l0 2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288l2.6 0c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32l0-2.6C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </FanLogo>
        <Avatar
          src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/lhyto1234-1718000814.jpg"
          alt=""
        />
        <Name>HeeYeoun's portfolio</Name>
      </HeaderLeft>
      <Nav>
        <Menu>
          <MenuLink to={"/about"}>About me</MenuLink>
        </Menu>
        <Menu>
          <MenuLink to={"#"}>skill</MenuLink>
        </Menu>
        <Menu>
          <MenuLink to={"#"}>work</MenuLink>
        </Menu>
        <Menu>
          <MenuLink to={"#"}>contact</MenuLink>
        </Menu>
      </Nav>
    </HeaderBox>
  );
}

export default Header;
