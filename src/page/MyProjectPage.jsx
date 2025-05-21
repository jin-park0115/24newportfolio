import styled from "styled-components";
import { Hr } from "./MainPage";

const MyProjectPage = () => {
  return (
    <>
      <Container>
        <Wrap>
          <Box>
            <p className="font-jejugothic text-[2.5rem] mobileL:text-[2.5rem] laptopL:text-[3.5rem] desktop:text-[4.5rem]">
              Project
            </p>
          </Box>
        </Wrap>
      </Container>
      <Hr />
    </>
  );
};

export default MyProjectPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrap = styled.div`
  height: 80vh;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  p {
    text-transform: uppercase;
  }
`;
