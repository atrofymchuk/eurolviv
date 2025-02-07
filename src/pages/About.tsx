import { Advantages } from "../components/About/Advantages";
import { Concepts } from "../components/About/Concepts";
import { AboutHeader } from "../components/About/Header";
import { Mission } from "../components/About/Mission";
// import ImageSlider from "../components/About/Slider";
import { StorySection } from "../components/About/StorySection";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <StorySection />
      <Advantages />
      <Mission />
      {/* <ImageSlider/> */}
      <Concepts />
    </div>
  );
};
