import WorksTodo from "../works/WorksTodo";
import styled from "styled-components";
import KakaoClone from "../works/KakaoClone";
const WorksPreview = styled.div`
  padding: 50px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const WorkBox = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 400px;
  height: 200px;
`;

function Works() {
  return (
    <WorksPreview>
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
    </WorksPreview>
  );
}

export default Works;
