import WorksTodo from "../works/WorksTodo";
import styled from "styled-components";
import KakaoClone from "../works/KakaoClone";
const WorksPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
`;

const WorkBox = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 400px;
  height: 200px;
`;
const Title = styled.h1`
  display: block;
  height: 100px;
  font-size: 40px;
  font-weight: 600;
  line-height: 100px;
`;

function Works() {
  return (
    <WorksPreview>
      <Title>Works</Title>
      <Wrapper>
        <WorkBox>
          <WorksTodo />
        </WorkBox>
        <WorkBox>
          <KakaoClone />
        </WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
        <WorkBox></WorkBox>
      </Wrapper>
    </WorksPreview>
  );
}

export default Works;
