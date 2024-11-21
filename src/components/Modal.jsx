import React from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, did, contri, tech }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="p-[10px]">
          <h2 className="text-lg font-bold mb-2 mobileL:text-[16px]">
            📖 ReadMe
          </h2>
          <p className="font-light">
            <span className="font-bold text-[16px] mobileL:text-[14px]">
              설명 :
            </span>
            {did}
          </p>
          <p className="font-bold mt-[4px] text-[16px] mobileL:text-[14px]">
            기여도 : {contri}
          </p>
        </div>
        <div>
          <p className="font-bold text-[16px] mobileL:text-[14px]">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-[4px]">
            {tech.map((item, index) => (
              <p
                key={index}
                className="border boder-purple-300 bg-purple-200 p-[3px] rounded-[4px] text-[0.8rem] mobileL:text-[0.7rem]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 80%;
`;
