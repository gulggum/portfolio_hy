import styled from "styled-components";
import { Link } from "react-router-dom";

const Preview = styled.div`
  padding: 30px;

  align-items: center;
  h3 {
    font-size: 30px;
  }
  iframe {
    padding: 30px;
  }
`;

function WorksTodo() {
  return (
    <Preview>
      <h3>Todo List</h3>
      <p>React,typescript,styled-components를 이용하여 구현하였습니다.</p>
      <p>https://gulggum.github.io/react_todolist/</p>
      <p>
        <Link
          to={
            "https://github.com/gulggum/react_todolist/tree/main/react-todolist"
          }
        >
          git-hub 바로가기
        </Link>
      </p>
      <iframe
        src=""
        title="Portfolio Preview"
        style={{
          width: "400px",
          height: "500px",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
      />
    </Preview>
  );
}

export default WorksTodo;
