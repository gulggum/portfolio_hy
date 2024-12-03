import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  display: block;
  height: 100px;
  font-size: 40px;
  font-weight: 600;
  line-height: 100px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
`;

function Contact() {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Wrapper></Wrapper>
    </Container>
  );
}

export default Contact;
