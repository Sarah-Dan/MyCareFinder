import { SelectedPage } from "../../shared/types";
import {
  About,
  Services,
  Testimonials,
  FindHospitals,
  Contact,
  Footer,
} from "@/components";
import CTAButton from "@/shared/CTAButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import doctor from "../../assets/doctor.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

// create a home component
const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-cf-white gap-16 py-20 md:h-full md:pb-0">
      {/* hero section */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* hero content */}
        <div className="mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-5xl font-bold text-cf-blue">
              Find the nearest hospital to you within seconds!
            </h1>
            <p className="mt-8 text-base font-medium">
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
        {/* hero image */}
        <div className="mt-8 flex w-full basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={doctor}
            alt="hero_image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
      {/* <Hero setSelectedPage={setSelectedPage} /> */}
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Testimonials />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </section>
  );
};

// export the home component
export default Home;
