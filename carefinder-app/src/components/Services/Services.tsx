import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({ setSelectedPage }: Props) => {
  return <section 
  id='services'
  className="mx-auto min-h-full w-5/6 py-20 ">
  <motion.div
  onViewportEnter={() => setSelectedPage(SelectedPage.Services)
    }
  className="section__boxes">
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
  </motion.div>
</section>

}

export default Services