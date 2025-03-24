import { Icon } from "./types";

export type ComfortsBlockToProps = {
    title: string;
    icons: Icon[];
    images: string[];
    imgStyle: ImgStyle;
    style: Styles;
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
  