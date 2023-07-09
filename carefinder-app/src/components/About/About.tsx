import { SelectedPage } from "@/shared/types";
import CTAButton from "@/shared/CTAButton";
import patient01 from "@/assets/patient01.png";
import patient02 from "@/assets/patient02.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="about"
      className="mx-auto min-h-full w-full gap-16 bg-cf-white py-20"
    >
      <div className="flex w-full flex-col items-center md:flex-row">
        <div className="flex w-5/6 items-center justify-center gap-2">
          <img className="w-1/2 object-contain" src={patient01} alt="patient" />
          <img
            className="mt-12 w-1/2 object-contain"
            src={patient02}
            alt="patient"
          />
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-between md:mt-0">
          <div className="flex w-full flex-col items-center">
            <h2 className="mb-2 text-2xl font-semibold">Welcome to </h2>
            <h1 className="text-5xl font-bold text-cf-blue">CareFinder</h1>
          </div>
          <div>
            <p className="leading-1 mb-2 w-full px-10 py-6 text-justify text-lg">
              CareFinder is a platform where users can search for hospitals in
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
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
