import { Advantages } from "../components/About/Advantages";
import { Concepts } from "../components/About/Concepts";
import { AboutHeader } from "../components/About/Header";
import { Mission } from "../components/About/Mission";
import { Rewies } from "../components/About/Reviews";
import { StorySection } from "../components/About/StorySection";
import { WhereWeAre } from "../components/About/WhereWeAre";

export const About = () => {
  return (
    <div>
      <AboutHeader />
      <StorySection />
      <Advantages />
       <Mission />
     <Concepts />
       <WhereWeAre />
     <Rewies />
    </div>
  );
};
