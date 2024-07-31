import { GenericSlide } from "yet-another-react-lightbox";

declare module "yet-another-react-lightbox" {
  export interface YouTubeSlide extends GenericSlide {
    type: "youtube";
    src: string;
    title: string;
    width: number;
    height: number;
  }

  interface SlideTypes {
    youtube: YouTubeSlide;
  }
}
