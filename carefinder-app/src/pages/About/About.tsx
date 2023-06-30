import { SelectedPage } from "@/shared/types";
import CTAButton from "@/shared/CTAButton";
import patient01 from "@/assets/patient01.png";
import patient02 from "@/assets/patient02.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="gap-16 bg-cf-white py-20 md:h-full md:pb-0">
      <div className="flex flex-row justify-center items-center mx-20">
        <div className="w-full flex gap-4 mt-4"> 
          <img
            className="w-1/3 h-1/3 object-contain"
            src={patient01}
            alt="welcome"
          />
          <img
            className="mt-12 w-1/3 h-1/3 object-contain"
            src={patient02}
            alt="welcome"
          />
        </div>
        <div className="flex flex-col justify-between w-full m-4 p-6 items-center">
          <div className="flex flex-col items-center mt-2.5 w-full">
            <h2 className="text-2xl text-bold mb-2.5">Welcome to </h2>
            <h1 className="text-5xl text-bold text-cf-blue">CareFinder</h1>
          </div>
          <div>
            <p className="text-medium leading-1 p-6 text-center mb-2.5 w-full">
              CareFinder is a platform where users can search for hosiptals in
              their areas, export hospital details for your records and enhance
              your healthcare experience by connecting with others and sharing
              valuable resources.
            </p>
          </div>
          <div>
          <CTAButton setSelectedPage={setSelectedPage}>Our Services</CTAButton>
            {/* <Button title="Our Services" /> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
