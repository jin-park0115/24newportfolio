import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Modal from "./Modal";

const BoxContent = ({
  img,
  name,
  period,
  des,
  skill,
  links,
  team,
  did,
  contri,
  tech,
}) => {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(!ModalOpen);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <div className="bg-[#c4c7cc]  rounded-[15px] ">
        <div className="p-[15px] flex flex-col gap-[5px] pb-[24px] mobileS:h-[450px] laptopL:h-[530px] desktop:h-[650px]">
          <div className="flex items-center">
            <p className="border border-[#fff] p-[10px] bg-[#fff] rounded-[10px] text-stone-900 font-jejumyeongjo text-[12px] tablet:text-[12px] laptop:text-[14px] laptopL:text-[16px] p-[6px] desktop:text-[22px]">
              {name}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-second laptop:font-md text-[12px] laptopL:text-[14px] desktop:text-[16px]">
              {team}
            </p>
          </div>
          <Line className="h-[1px] laptopL:h-[1.5px] desktop:h-[2px]" />
          <div>
            <p className="text-stone-900 font-light text-second text-[12px] tablet:text-[12px] laptop:text-[14px] desktop:text-[20px]">
              {period ? period : <span className="p-[10px]"></span>}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[70%] h-[290px]  hover:blur-sm transition ease-in-out delay-200 cursor-pointer laptop:w-[65%] desktop:w-[70%] mobileL: h-[auto]">
              <img src={img} alt="썸네일" />
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-[12px] mobileL:text-[14px] tablet:text-[10px] tablet:h-[34px] laptop:text-[12px] laptopL:text-[14px] desktop:text-[16px]">
              설명 : <span className="font-jejumyeongjo">{des}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-[5px] text-stone-900 items-center text-[12px] mobileL:text-[14px] tablet:text-[10px] laptop:text-[12px] gap-[3px] laptopL:text-[14px] desktop:text-[16px]">
            <div className="font-bold ">사용한 기술 : </div>
            {skill.map((item, index) => (
              <div key={index}>
                <p className="flex  font-light text-[12px] border border-slate-300 p-[2px] rounded-[4px] bg-slate-200 font-jejugothic mobileL:text-[12px] tablet:text-[10px] laptop:text-[12px] laptopL:text-[14px] desktop:text-[16px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <Read onClick={handleOpen} className="cursor-pointer">
            <div className="border border-indigo-300 rounded-[4px] p-[4px] bg-indigo-200 text-[12px] mobileL:text-[14px] tablet:text-[10px] laptop:text-[12px] laptopL:text-[14px] desktop:text-[18px]">
              <p>ReadMe</p>
            </div>
          </Read>
          <div className="flex flex-col">
            {links.map((item, index) => (
              <Link
                key={index}
                className="text-[10px] text-blue-500 border-l border-l-[2px] border-l-blue-500 pl-[5px] text-[10px] laptop:text-[13px] desktop:text-[15px]"
                to={item}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={ModalOpen}
        onClose={handleClose}
        did={did}
        contri={contri}
        tech={tech}
      />
    </>
  );
};

export default BoxContent;

const Line = styled.div`
  border: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50%{ background-position: 100% 50% }
  100%{ background-position: 0% 50% }
`;

const Read = styled.div`
  display: flex;

  div {
    background: linear-gradient(-45deg, #6366f1, #a5b4fc, #c7d2fe, #818cf8);
    background-size: 300% 300%;
    animation: ${gradientAnimation} 3s ease infinite;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
