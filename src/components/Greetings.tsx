import { useEffect, useState } from "react";
import styled from "styled-components";

const GreetingBox = styled.div`
  width: 100%;
  height: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 90px;
  border-bottom: 2px solid #333;
  border-radius: 10200px 0px / 2700px;

  background-color: orange;
  border: none;
`;

const Blank = styled.div`
  padding: 80px 0px;
`;

const Avatar = styled.img`
  display: block;
  width: 300px;
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
`;

function Greetings() {
  return (
    <GreetingBox>
      <Blank></Blank>
      <Avatar
        src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/lhyto1234-1718000814.jpg"
        alt=""
      />
      <span>프론트 엔드 개발자 포트폴리오</span>
      <span></span>
      <span>안녕하세요. 이희연 입니다.</span>
    </GreetingBox>
  );
}

export default Greetings;
