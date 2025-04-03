import { Icon } from "./types";

export type ComfortsBlockToProps = {
    title: string;
    icons: Icon[];
    images: string[];
    imgStyle: ImgStyle;
    style: Styles;
    isOtherLux?: boolean;
    isLuxElegant?: boolean;
  };
  
  export type ImgStyle = {
    ammentiesImageFst: string;
    ammentiesImageScd: string;
  };
  
  export type Styles = {
    bgColor: string;
    text: string;
    headerColor: string;
  };
  