import { Link } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const email = "parkjin0115@naver.com";
  return (
    <>
      <div className="h-[80vh] bg-primary m-0 flex laptopL:h-screen">
        <div className="flex flex-col absolute top-9 right-[53px] md:top-10 md:right-12 lg:top-12 lg:right-16 mobileM:right-[10px] mobileL: right-10 top-8">
          <Link
            to="https://github.com/jin-park0115"
            className="text-[28px] text-white font-light font-jejumyeongjo hover:text-stone-900 transition ease-in-out delay-150 mobileM:text-[16px] mobileL:text-[20px] tablet:text-[24px] laptop: text-[28px] desktop:text-[34px]"
          >
            Github
          </Link>
          <a
            href={`mailto:${email}`}
            className="text-[30px] text-white mt-[24px] font-light font-jejumyeongjo hover:text-stone-900 transition ease-in-out delay-150 mobileM:text-[16px] mobileL:text-[20px] tablet:text-[24px] laptop: text-[28px] desktop:text-[34px]"
          >
            이메일
          </a>
        </div>
        <Left>
          <p className="font-jejumyeongjo text-[1rem] mobileM:w-[80px] mobileL:w-[100px] text-[0.7rem]  tablet:w-[120px] text-[0.8rem] desktop:text-[1.1rem] ">
            웹/앱 개발자 박진 포트폴리오
          </p>
        </Left>
        <Center>
          <p className="text-[110px] font-jejugothic mobileM:text-[70px] mobileL:text-[80px] laptop:text-[118px] laptopL:text-[128px] desktop:text-[140px]">
            Portfolio
          </p>
          <p className="font-jejumyeongjo text-[12px] mobileM:text-[10px] mobileL:text-[11px] desktop:text-[20px] ">
            웹/앱을 개발하는 박진입니다.
          </p>
        </Center>
      </div>
      <Hr />
    </>
  );
};

export default MainPage;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    white-space: nowrap;
    transform: rotate(270deg);
  }
`;
const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #222;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 3px double #8c8c8c;
`;
