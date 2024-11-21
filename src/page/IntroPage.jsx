import { Link } from "react-router-dom";
import myImg from "../assets/증명사진.jpeg";
import BackGround from "../components/BackGround";
import { Hr } from "./MainPage";

const IntroPage = () => {
  return (
    <>
      <BackGround>
        <div className="flex h-screen bg-transparent">
          <div className="w-[90%] border-r-[1px] border-r-black back bg-transparent flex flex-col pl-[24px] justify-around mobileS:items-center  tablet:items-start laptop: laptopL: desktop:gap-[30px]">
            <div>
              <h1 className="font-jejugothic text-[64px] mobileM:text-[34px] tablet:text-[54px]">
                Introduce
              </h1>
            </div>
            <div className="w-[240px] mobileM:w-[180px] tablet:w-[220px] laptop:w-[245px] laptopL:w-[255px] desktop:w-[260px]">
              <img
                src={myImg}
                alt="증명사진"
                className="rounded-tl-[10px] rounded-tr-[10px] laptop:rounded-tl[12px] rounded-tr-[12px]"
              />
            </div>
            <div className="w-auto mt-[32px] text-white desktop:mt-[28px]">
              <p className="font-jejumyeongjo text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
                이름 : 박진
              </p>
              <p className="font-jejumyeongjo text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
                생년월일 : 2000.01.15
              </p>
              <p className="font-jejumyeongjo text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
                사는 곳 : 고양시 일산동구 중산로
              </p>
              <p className="font-jejumyeongjo text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
                한마디 : 목마른 사슴이 시냇물을 찾듯이 성장에 목마른 주니어
                개발자 박진입니다.
              </p>
            </div>
          </div>
        </div>
        <Hr />
      </BackGround>
    </>
  );
};

export default IntroPage;
