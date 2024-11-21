declare module "react-fullpage" {
  interface SectionsContainerProps {
    anchors?: string[];
    navigation?: boolean;
    activeClass?: string;
    sectionClassName?: string;
    scrollBar?: boolean;
    delay?: number;
    scrollOverflow?: boolean;
    touchSensitivity?: number;
    onLeave?: (origin: any, destination: any, direction: any) => void;
    afterLoad?: (origin: any, destination: any, direction: any) => void;
    [key: string]: any;
  }

  export const SectionsContainer: React.FC<SectionsContainerProps>;
  export const Section: React.FC;
}
