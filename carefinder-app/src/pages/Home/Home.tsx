// import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import { Hero } from "../../components";
// import ActionButton from "../../shared/CTAButton";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

// create a home component
const Home = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return <section 
    id="home"
    className="gap-16 bg-cf-gray py-20 md:h-full md:pb-0"
    >
      {/* hero section */}
      <Hero setSelectedPage={setSelectedPage} />
      {/* <p>check out your profile</p> */}
      {/* <a href="/profile">Profile</a> */}
      
      
      {/* how it works */}
      {/* <HowItWorks /> */}
      {/* testimonials */}
      {/* <Testimonials /> */}
      {/* footer */}
      {/* <Footer /> */}
      
    </section>
 
};

// export the home component
export default Home;
