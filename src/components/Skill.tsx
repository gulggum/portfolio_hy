import styled from "styled-components";

const SkillContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Box = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  display: block;
  height: 100px;
  font-size: 40px;
  font-weight: 600;
  line-height: 100px;
`;

const SkillIcon = styled.div`
  width: 80%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 50px;
  justify-items: center;
  align-items: center;
`;

const Icon = styled.img``;

function Skill() {
  return (
    <SkillContainer>
      <Box>
        <Title>Skill</Title>
        <SkillIcon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2Fhtml5_1IJr1hb.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2Fcss3.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2FJS.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2Fgrid_Yj1ThwX.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2FJS_Node.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2FPug_TAaOtzg.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2FMongoDB_XriFIJg.png&w=64&q=75"></Icon>
          <Icon src="https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Fbadges%2Fes6.png&w=64&q=75"></Icon>
        </SkillIcon>
      </Box>
    </SkillContainer>
  );
}

export default Skill;
