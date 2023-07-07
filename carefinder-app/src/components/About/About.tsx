import { SelectedPage } from "@/shared/types";
import CTAButton from "@/shared/CTAButton";
import patient01 from "@/assets/patient01.png";
import patient02 from "@/assets/patient02.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="gap-16 bg-cf-white py-20 md:h-full md:pb-0">
      <div className="mx-20 flex flex-row items-center justify-center">
        <div className="mt-4 flex w-full gap-4">
          <img
            className="h-1/3 w-1/3 object-contain"
            src={patient01}
            alt="welcome"
          />
          <img
            className="mt-12 h-1/3 w-1/3 object-contain"
            src={patient02}
            alt="welcome"
          />
        </div>
        <div className="m-4 flex w-full flex-col items-center justify-between p-6">
          <div className="mt-2.5 flex w-full flex-col items-center">
            <h2 className="text-bold mb-2.5 text-2xl">Welcome to </h2>
            <h1 className="text-bold text-5xl text-cf-blue">CareFinder</h1>
          </div>
          <div>
            <p className="leading-1 mb-2.5 w-full p-6 text-center text-medium">
              CareFinder is a platform where users can search for hosiptals in
              their areas, export hospital details for your records and enhance
              your healthcare experience by connecting with others and sharing
              valuable resources.
            </p>
          </div>
          <div>
            <CTAButton
              setSelectedPage={setSelectedPage}
              // onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Our Services
            </CTAButton>
            <AnchorLink
              className="text-sm font-bold text-cf-black underline hover:text-cf-blue mt-8"
              onClick={() => setSelectedPage(SelectedPage.Profile)}
              href={`#${SelectedPage.Profile}`}
            >
              <p>Profile</p>
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
