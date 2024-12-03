import WorksTodo from "../works/WorksTodo";
import styled from "styled-components";
import KakaoClone from "../works/KakaoClone";
import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { idText } from "typescript";

const WorksPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
`;

const WorkBox = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  cursor: pointer;
`;
const Title = styled.h1`
  display: block;
  height: 100px;
  font-size: 40px;
  font-weight: 600;
  line-height: 100px;
`;

const PopupBox = styled(motion.div)`
  width: 1200px;
  height: 600px;
  background-color: tomato;
  position: fixed;
  left: 20%;
  top: 20%;
`;

function Works() {
  //Box click시 팝업창
  const navigate = useNavigate();
  const onClickWorkBox = (id: number) => {
    navigate(`/works/${id}`);
  };

  const onModalOut = () => {
    navigate("/");
  };

  const workBoxMatch = useMatch(`/works/:id`);
  console.log(workBoxMatch);

  return (
    <WorksPreview id="works">
      <Title>Works</Title>
      <Wrapper>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <>
              <WorkBox
                key={id}
                onClick={() => onClickWorkBox(id)}
                layoutId={id + ""}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "keyframes" }}
              >
                {id === 1 && <KakaoClone />}
                {id === 2 && <WorksTodo />}
              </WorkBox>
            </>
          ))}
        </AnimatePresence>
      </Wrapper>
      <AnimatePresence>
        {" "}
        {workBoxMatch ? (
          <PopupBox layoutId={workBoxMatch.params.id}>
            <button onClick={onModalOut}>❌</button>
          </PopupBox>
        ) : null}
      </AnimatePresence>
    </WorksPreview>
  );
}

export default Works;
