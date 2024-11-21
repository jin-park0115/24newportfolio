import { Hr } from "./MainPage";

const ExperiencePage = () => {
  return (
    <>
      <div className="flex h-screen bg-primary">
        <div className="w-[90%] border-r-[1px] border-r-black pl-[24px] pt-[34px]">
          <div className="h-[100%] flex flex-col justify-between">
            <div>
              <h1 className="font-jejugothic text-[34px] tablet:text-[54px] laptop:text-[64px]">
                Experience
              </h1>
            </div>
            <div>
              <div className="flex flex-col pb-[24px] gap-[20px] mobileS:gap-[4px] tablet:gap-[14px]">
                <div>
                  <p className="font-jejugothic text-[14px] mobileS:text-[16px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2024.03 한국방송통신대학교 재학
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:text-[16px] laptopL:text-[18px] desktop:text-[20px]">
                    컴퓨터과학과
                  </span>
                  <p>?</p>
                </div>
                <div>
                  <p className="font-jejugothic text-[14px] mobileS:text-[16px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2022.02 서영대학교 졸업
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:text-[16px] laptopL:text-[18px] desktop:text-[20px]">
                    호텔외식조기학과
                  </span>
                </div>
                <div>
                  <p className="font-jejugothic text-[14px] mobileS:text-[16px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2023.11.08 제로베이스 프론트엔드 스쿨 수강
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:[16px] laptopL:text-[18px] desktop:text-[20px]">
                    2023.04.01 ~ 11.08까지
                  </span>
                </div>
                <div>
                  <p className="font-jejugothic text-[14px] mobileS:text-[16px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2023.02 SBS아카데미컴퓨터아트학원
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:[16px] laptopL:text-[18px] desktop:text-[20px]">
                    4개월간 웹퍼블리싱
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
};

export default ExperiencePage;
