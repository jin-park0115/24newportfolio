import myImg from "../assets/증명사진-removebg.png";
import { Hr } from "./MainPage";

const IntroPage = () => {
  return (
    <>
      <div className="flex h-screen">
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
          <div className="w-auto mt-[32px] text-neutral-900 desktop:mt-[28px]">
            <p className="font-recipekorea text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
              프론트엔드 개발자 박진입니다.
            </p>
            {/* <p className="font-recipekorea text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
              생년월일 : 2000.01.15
            </p> */}
            {/* <p className="font-recipekorea text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
              사는 곳 : 고양시 일산동구 중산로
            </p> */}
            <p className="font-recipekorea text-[12px] mobileL:text-[14px] tablet:text-[16px] laptopL:text-[20px] desktop:text-[24px]">
              사용자를 생각하는 마인드와 성실함과 책임감 있게 일하는 개발자
              입니다.
            </p>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
};

export default IntroPage;
