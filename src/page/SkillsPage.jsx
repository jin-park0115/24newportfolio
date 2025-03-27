import { Hr } from "./MainPage";

const SkillsPage = () => {
  return (
    <>
      <div className="flex h-screen bg-primary">
        <div className="w-[90%] border-r-[1px] border-r-black pl-[24px] pt-[34px] pb-[20px]">
          <div className="h-[100%] flex flex-col justify-between">
            <div>
              <h1 className="font-jejugothic text-[34px] tablet:text-[54px] laptop:text-[64px]">
                Skills
              </h1>
            </div>

            <div className="w-[90%] bg-teal-100 shadow-xl p-[20px]  flex flex-col gap-[12px] rounded-[5px]">
              <div className="flex gap-[15px] items-center mobileS:flex-col mobileS:items-start mobileS:gap-[5px]">
                <div className="w-[120px] tablet:w-[110px] desktop:w-[160px]">
                  <p className="font-bold text-[0.9rem] mobileL:text-[1rem] tablet:text-[1.2rem] laptop:text-[1.6rem] desktop:text-[1.7rem]">
                    Language
                  </p>
                </div>
                <div className="flex gap-[5px] items-center desktop:gap-[8px]">
                  <div className="bg-yellow-300 border border-yellow-300 p-[5px] rounded-[5px] hover:bg-yellow-500 cursor-pointer desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      JavaScript
                    </p>
                  </div>
                  <div className="bg-sky-500 border border-sky-500 p-[5px] rounded-[5px] hover:bg-sky-700 cursor-pointer desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-white text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      TypeScript
                    </p>
                  </div>
                  <div className="bg-orange-500 border border-orange-500 p-[5px] rounded-[5px] hover:bg-orange-700 cursor-pointer desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      HTML5
                    </p>
                  </div>
                  <div className="bg-blue-500 border border-blue-500 p-[5px] rounded-[5px] hover:bg-blue-700 cursor-pointer desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      CSS3
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[15px]items-center mobileS:flex-col mobileS:items-start mobileS:gap-[5px]">
                <div className="flex gap-[5px] items-center w-[120px] mobileL:w-[80px] tablet:w-[110px] desktop:w-[160px]">
                  <p className="font-bold text-[0.9rem] mobileL:text-[1rem] tablet:text-[1.2rem] laptop:text-[1.6rem] desktop:text-[1.7rem]">
                    Frontend
                  </p>
                </div>
                <div className="flex items-center gap-[5px] flex-wrap desktop:gap-[10px]">
                  <div className="border border-indigo-500 bg-indigo-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-indigo-700 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      React
                    </p>
                  </div>
                  <div className="border border-purple-500 bg-purple-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-purple-700 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] text-white  mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Redux
                    </p>
                  </div>
                  <div className="bg-black border border-black-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-gray-700 desktop:p-[14px] rounded-[18px]">
                    <p className="text-white font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      React-Hook-Form
                    </p>
                  </div>
                  <div className="bg-pink-500 border border-pink-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-pink-700 desktop:p-[14px] rounded-[18px]">
                    <p className="text-white font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Styled-Components
                    </p>
                  </div>
                  <div className="bg-cyan-300 border border-cyan-300 p-[5px] rounded-[5px] cursor-pointer hover:bg-cyan-500 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="flex gap-[15px] items-center mobileS:flex-col mobileS:items-start mobileS:gap-[5px]">
                <div className="w-[120px] mobileL:w-[80px] tablet:w-[110px] desktop:w-[160px]">
                  <p className="text-[0.9rem] font-bold mobileL:text-[1rem] tablet:text-[1.2rem] laptop:text-[1.6rem] desktop:text-[1.7rem]">
                    BackEnd
                  </p>
                </div>
                <div className="bg-red-500 border border-red-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-red-700 desktop:p-[14px] rounded-[18px]">
                  <p className="font-bold text-white text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                    FireBase
                  </p>
                </div>
              </div> */}

              <div className="flex gap-[15px] items-center mobileS:flex-col mobileS:items-start mobileS:gap-[5px]">
                <div className="w-[120px] tablet:w-[110px] desktop:w-[160px]">
                  <p className="text-[0.9rem] font-bold mobileL:text-[1rem] tablet:text-[1.2rem] laptop:text-[1.6rem] desktop:text-[1.7rem]">
                    Tool
                  </p>
                </div>
                <div className="flex items-center gap-[5px] desktop:gap-[10px]">
                  <div className="bg-black border border-black rounded-[5px] p-[5px] cursor-pointer hover:bg-gray-700 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] text-white mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Github
                    </p>
                  </div>
                  <div className="bg-green-500 border border-green-500 rounded-[5px] p-[5px] cursor-pointer hover:bg-green-700 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Figma
                    </p>
                  </div>
                  <div className="bg-blue-300 border border-blue-300 rounded-[5px] p-[5px] cursor-pointer hover:bg-blue-500 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Netlify
                    </p>
                  </div>
                  <div className="bg-black border border-black rounded-[5px] p-[5px] cursor-pointer hover:bg-gray-700 desktop:p-[14px] rounded-[18px]">
                    <p className="font-bold text-[12px] text-white mobileL:text-[12px] mobileL:font-bold tablet:text-[16px] laptop:text-[18px] font-light desktop:text-[20px]">
                      Vercel
                    </p>
                  </div>
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

export default SkillsPage;
