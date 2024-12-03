import styled from "styled-components";

const GreetingBox = styled.div`
  width: 100%;
  height: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  border-radius: 10200px 0px / 2700px;
  background-color: orange;
  border: none;
  span {
    font-size: 20px;
    font-weight: 600;
  }
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
const Text = styled.div`
  margin-top: 50px;
  text-align: center;
`;

function Greetings() {
  return (
    <GreetingBox>
      <Blank></Blank>
      <Avatar
        src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/lhyto1234-1718000814.jpg"
        alt=""
      />
      <Text>
        <span>프론트 엔드 개발자 포트폴리오</span>
        <br />
        <span>안녕하세요. 이희연 입니다.</span>
      </Text>
    </GreetingBox>
  );
}

export default Greetings;
