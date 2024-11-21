import styled from "styled-components";

const BackGround = ({ children }) => {
  return (
    <Container>
      <Background />
      <Background2 />
      <Background3 />
      {children}
    </Container>
  );
};

export default BackGround;

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw; /* 전체 너비 */
  height: 100vh;
  z-index: -1;
`;

const Background = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  width: 200%;
  height: 100%;
  z-index: -11;
  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;

const Background2 = styled(Background)`
  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

const Background3 = styled(Background)`
  animation-duration: 5s;
`;
