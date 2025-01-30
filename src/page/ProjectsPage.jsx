import styled from "styled-components";
import BoxContent from "../components/BoxContent";
import tripImg from "../assets/트립토크.jpeg";
import filmImg from "../assets/필름.jpeg";
import cookImg from "../assets/cookrecipe.png";
import lottoImg from "../assets/lotto.png";
import typhoImg from "../assets/typhography.png";
import newjeansImg from "../assets/뉴진스.png";
import cardImg from "../assets/CardFilp.png";
import checkdImg from "../assets/말씀체크.png";

import datas from "../data.json";
import { Hr } from "./MainPage";
const ProjectsPage = () => {
  const Imgs = [
    tripImg,
    filmImg,
    cookImg,
    lottoImg,
    typhoImg,
    newjeansImg,
    cardImg,
    checkdImg,
  ];
  return (
    <>
      <Container className="bg-primary pt-[10px] pb-[10px]tablet:pt-[30px] pb-[30px]">
        <Wrap className="w-[80%]">
          {datas.map((item, index) => (
            <Box key={item.id}>
              <BoxContent
                img={Imgs[index]}
                name={item.name}
                team={item.team}
                period={item.period}
                des={item.description}
                skill={item.skill}
                links={item.link}
                did={item.did}
                contri={item.contribution}
                tech={item.technology}
              />
            </Box>
          ))}
        </Wrap>
      </Container>
      <Hr />
    </>
  );
};

export default ProjectsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrap = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  border-radius: 15px;
`;
