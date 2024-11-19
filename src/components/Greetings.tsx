import { useEffect, useState } from "react";
import styled from "styled-components";

const GreetingBox = styled.div`
  margin-top: 150px;

  padding: 30px;
  display: flex;
  flex-direction: column;
  font-size: 60px;
  line-height: 90px;
  border-bottom: 2px solid #333;
  span {
    font-weight: 600;
  }
`;

function Greetings() {
  return (
    <GreetingBox>
      <span>Hi, my name is</span>
      <span>Hee Yeoun</span>
      <span>I'm the Frontend Developer !!</span>
    </GreetingBox>
  );
}

export default Greetings;
