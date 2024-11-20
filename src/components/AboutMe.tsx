import styled from "styled-components";
const AboutBox = styled.div`
  margin-top: 80px;
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

const About = styled.p``;

function AboutMe() {
  return (
    <AboutBox>
      <Title>AboutMe</Title>
      <About>
        다양한 첼린지로 문제를 정의하고 해결하는 연습으을 통해 자바스크립트 코딩
        실력을 향상해 보세요✨
      </About>
    </AboutBox>
  );
}
export default AboutMe;
