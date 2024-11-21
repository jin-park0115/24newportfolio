import { useState } from "react";
import styled from "styled-components";

const ContactPage = () => {
  const [flipped, setFilpped] = useState(false);

  const handleFlip = () => {
    setFilpped((prev) => !prev);
  };

  return (
    <div className="overflow-hidden bg-second h-[60vh] flex flex-col justify-between tablet:h-screen">
      <Title className="text-[64px] font-jejugothic  mobileS:text-[34px] tablet:text-[54px] laptop:text-[64px]">
        Contact
      </Title>
      <Container>
        <CardContainer onClick={handleFlip}>
          <Inner
            flipped={flipped ? 1 : 0}
            className="border border-slate-400 bg-slate-700 rounded-[10px] shadow-xl font-leeseoyun"
          >
            <Front className="flex justify-center items-center cursor-pointer">
              <p className="text-white font-bold text-[1.2rem]">연락처</p>
            </Front>
            <Back className="flex justify-center items-center cursor-pointer">
              <div className="flex flex-col items-center">
                <p className="text-stone-400 text-[1.1rem mobileL:text-[1rem]]">
                  Email
                </p>
                <p className="text-white text-[0.9rem] mobileL:text-[0.8rem]">
                  parkjin0115@naver.com
                </p>
                <p className="text-stone-400 text-[1.1rem] mobileL:text-[1rem]">
                  Github
                </p>
                <p className="text-white text-[0.9rem] mobileL:text-[0.8rem]">
                  github.com/jin-park0115
                </p>
              </div>
            </Back>
          </Inner>
        </CardContainer>
      </Container>
      <Footer>
        <div className="text-[6px] tablet:text-[10px]">
          <p>Porfolio © 24</p>
        </div>
        <div className="w-[65%] h-[2px] border border-white tablet:h-[1px]"></div>
        <div>
          <p className="text-[6px] tablet:text-[10px]">
            Create by <span className="font-bold">JIN PARK</span>
          </p>
        </div>
      </Footer>
    </div>
  );
};

export default ContactPage;

const Title = styled.h1`
  position: relative;
  top: 20px;
  left: 40px;
  color: #fff;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  perspective: 1000px;
`;

const Inner = styled.div`
  width: 400px;
  height: 250px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "none")};

  @media (min-width: 305px) {
    width: 200px;
    height: 150px;
  }
  @media (min-width: 728px) {
    width: 350px;
    height: 200px;
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #fff;
  padding: 0px 10px 0px 10px;
`;
