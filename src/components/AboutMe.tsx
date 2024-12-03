import styled from "styled-components";
const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 600;
`;

const About = styled.p`
  line-height: 50px;
  font-size: 20px;
`;

function AboutMe() {
  return (
    <AboutBox id="about">
      <Title>AboutMe</Title>
      <About>
        새로운 도전으로 개발을 꿈꾸고 열정 가득한 프론트엔드 개발자
        이희연입니다. ✨
      </About>
      <About>✔️학력 - 2008.03 ~ 2010.02 숭의여대(경영학과)</About>
      <About>✔️자격증 - 웹디자인기능사(2023)</About>
    </AboutBox>
  );
}
export default AboutMe;
