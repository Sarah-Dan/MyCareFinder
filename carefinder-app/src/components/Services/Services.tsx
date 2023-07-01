import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import hospital from "../../assets/hospital.png";
import doctoricon from "../../assets/doctoricon.png";
import saveline from "../../assets/saveline.png";
import share from "../../assets/share.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        
          <div className="flex flex-col justify-center items-center">
        <h2 className="text-cf-blue text-3xl font-bold mb-2">
          Our Services
        </h2>
        <p className="text-medium my-8">
          We provide a wide range of services to help you find the best
          hospitals and doctors near you.
        </p>
        </div>
        <div className="md:flex mt-5 items-center justify-between gap-8">
          {/* services boxes */}
        <div className="bg-cf-white mt-5 rounded-md border-2 px-5 py-16 text-center shadow-cf-shadow transition-cf-transition hover:cf-transform">
          <div className="mb-4 flex justify-center">
          <img src={hospital} 
          alt="hospital" 
          className="bg-cf-blue p-2 rounded-full mb-2.5" 
          />
          </div>
          <h3 className="text-center text-base font-semibold leading-normal">Find a Hospital</h3>
          <p className="text-center text-xs font-medium leading-normal ">Effortlessly Find the Best Hospitals Near You</p>
        </div>
        <div className="bg-cf-white mt-5 rounded-md border-2 px-5 py-16 text-center shadow-cf-shadow transition-cf-transition hover:cf-transform">
        <div className="mb-4 flex justify-center">
          <img src={doctoricon} 
          alt="doctor"
          className="bg-cf-blue p-2 rounded-full mb-2.5" 
          />
          </div>
          <h3 className="text-center text-base font-semibold leading-normal">Find a Doctor</h3>
          <p className="text-center text-xs font-medium leading-normal">Find the Best Doctors Near You</p>
        </div>
        <div className="bg-cf-white mt-5 rounded-md border-2 px-5 py-16 text-center shadow-cf-shadow transition-cf-transition hover:cf-transform">
        <div className="mb-4 flex justify-center">
          <img src={saveline} 
          alt="save" 
          className="bg-cf-blue p-2 rounded-full mb-2.5"
          />
          </div>
          <h3 className="text-center text-base font-semibold leading-normal">Export Hospitals</h3>
          <p className="text-center text-xs font-medium leading-normal">Export Hospital Details for Your Records</p>
        </div>
        <div className="bg-cf-white mt-5 rounded-md border-2 px-5 py-16 text-center shadow-cf-shadow transition-cf-transition hover:cf-transform">
        <div className="mb-4 flex justify-center">
          <img src={share} 
          alt="share"
          className="bg-cf-blue p-2 rounded-full mb-2.5" 
          />
          </div>
          <h3 className="text-center text-base font-semibold leading-normal">Share Hospitals</h3>
          <p className="text-center text-xs font-medium leading-normal">Share Hospitals with Others</p>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
