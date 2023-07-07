import CTAButton from "@/shared/CTAButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import doctor from "../../assets/doctor.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    //  main hero section
    <section className="gap-16 bg-cf-gray py-20 md:h-full md:pb-0">
      <div className="w-5/6 items-center justify-center md:mx-auto md:flex md:h-5/6">
        <div className="z-10 mt-2 md:basis-4/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-5xl font-semibold text-cf-blue">
              Find the nearest hospital to you within seconds!
            </h1>
            <p className="mt-4 text-base font-medium">
              Discover Your Perfect care: Find your hospital, Anytime, Anywhere!
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <CTAButton setSelectedPage={setSelectedPage}>Get Started</CTAButton>
            <AnchorLink
              className="text-sm font-bold text-cf-black underline hover:text-cf-blue"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex w-2/3 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <div className="relative h-full w-full">
            <img
              src={doctor}
              alt="hero_image"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
