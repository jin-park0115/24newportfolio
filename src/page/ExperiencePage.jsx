import { Hr } from "./MainPage";

const ExperiencePage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[90%] border-r-[1px] border-r-black pl-[24px] pt-[34px]">
          <div className="h-[100%] flex flex-col justify-between">
            <div>
              <h1 className="font-jejugothic text-[34px] tablet:text-[54px] laptop:text-[64px]">
                Education
              </h1>
            </div>
            <div>
              <div className="flex flex-col pb-[24px] gap-[20px] mobileS:gap-[4px] tablet:gap-[14px]">
                <div>
                  <p className="font-recipekorea text-[14px] mobileS:text-[14px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2024.03 한국방송통신대학교 재학
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:text-[16px] laptopL:text-[18px] desktop:text-[20px]">
                    - 컴퓨터과학과
                  </span>
                </div>
                <div>
                  <p className="font-recipekorea text-[14px] mobileS:text-[14px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2023.11 제로베이스 프론트엔드 스쿨 수료
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:text-[16px] laptopL:text-[18px] desktop:text-[20px]">
                    - 23.04 ~ 23.11
                  </span>
                </div>
                <div>
                  <p className="font-recipekorea text-[14px] mobileS:text-[14px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2023.01 SBS아카데미컴퓨터아트학원 수료
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:[16px] laptopL:text-[18px] desktop:text-[20px]">
                    - 2022.10 ~ 23.02
                  </span>
                </div>
                <div>
                  <p className="font-recipekorea text-[14px] mobileS:text-[14px] tablet:text-[20px] laptop:text-[22px] laptopL:text-[24px]">
                    2022.02 서영대학교 졸업
                  </p>
                  <span className="font-jejumyeongjo mobileS:text-[12px] talbet:text-[14px] laptop:[16px] laptopL:text-[18px] desktop:text-[20px]">
                    - 호텔외식조리학과
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
