import { SectionsContainer, Section } from "react-fullpage";
import ExperiencePage from "./ExperiencePage";
import IntroPage from "./IntroPage";
import MainPage from "./MainPage";
import SkillsPage from "./SkillsPage";

let options = {
  anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  navigation: false,
  activeClass: "active",
};

const FullPage = () => {
  return (
    <SectionsContainer {...options} className="bg-primary">
      <Section>
        <MainPage />
      </Section>
      <Section>
        <IntroPage />
      </Section>
      <Section>
        <ExperiencePage />
      </Section>
      <Section>
        <SkillsPage />
      </Section>
    </SectionsContainer>
  );
};

export default FullPage;
