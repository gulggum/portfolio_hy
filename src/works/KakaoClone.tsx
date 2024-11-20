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

function KakaoClone() {
  return (
    <Preview>
      <h3>Kakao Clone</h3>
      <p>Html,css를 이용하여 카카오톡을 구현하였습니다.</p>
      <p>https://gulggum.github.io/kakao__clone-disney-ver-/</p>
      <p>
        <Link to={"https://github.com/gulggum/kakao__clone-disney-ver-"}>
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

export default KakaoClone;
