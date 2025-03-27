import { useState } from "react";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <div className="overflow-hidden bg-second h-[60vh] flex flex-col justify-between tablet:h-screen">
      <Title className="text-[64px] font-jejugothic  mobileS:text-[34px] tablet:text-[54px] laptop:text-[64px]">
        Contact
      </Title>
      <Container>
        <CardContainer>
          <Back className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <p className="text-stone-400 text-[1.1rem mobileL:text-[1rem]]">
                Email
              </p>
              <p className="text-[0.9rem] mobileL:text-[0.8rem]">
                parkjin0115@naver.com
              </p>
              <p className="text-stone-400 text-[1.1rem] mobileL:text-[1rem]">
                Github
              </p>
              <p className="text-[0.9rem] mobileL:text-[0.8rem]">
                github.com/jin-park0115
              </p>
            </div>
          </Back>
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

const Back = styled.div`
  background-color: white;
  color: #222;
  padding: 20px;
  border-radius: 10px;
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
