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
      
      {/* <section className="section">
        <div className="section__boxes">
          <div className="section__box">
            <img src="./assets/hospital.png" alt="welcome" />
            <h3>Find a Hospital</h3>
            <p>Effortlessly Find the Best Hospitals Near You</p>
          </div>
          <div className="section__box">
          <img src="./assets/doctoricon.png" alt="welcome" />
          <h3>Find a Doctor</h3>
          <p>Find the Best Doctors Near You</p>
          </div>
          <div className="section__box">
          <img src="./assets/saveline.png" alt="welcome" />
          <h3>Export Hospitals</h3>
          <p>Export Hospital Details for Your Records</p>
          </div>
          <div className="section__box">
          <img src="./assets/share.png" alt="welcome" />
          <h3>Share Hospitals</h3>
          <p>Share Hospitals with Others</p>
          </div>
        </div>
      </section> */}
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
