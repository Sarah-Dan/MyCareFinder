import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "@/assets/cflogo.png";
import { SelectedPage } from "../../shared/types";
import CTAButton from "../../shared/CTAButton";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-cf-blue drop-shadow text-white";
  
  return ( 
  <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <div className="flex-row flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold ml-2">CareFinder</h1>
          </div>
          {/* nav links */}
          {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
              />
              <Link page="About" selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} /> 
              <Link page="Contact us" selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} /> 
              <Link page="Find Hospitals" selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />   
            </div>
            <div className={`${flexBetween} gap-8`}>
            <Link page="Log in" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
              <CTAButton setSelectedPage={setSelectedPage}>
                    Sign up
              </CTAButton>
            </div>
          </div>
          ) : (
            
              <button 
                className="rounded-full bg-cf-blue text-cf-white p-2"
                onClick={() => setIsMenuOpen(true)}
                >
                <AiOutlineMenu size={32} />
              </button>
            
          )}

      </div>
    </div>
    </div>
    {/* for smaller devices */}
    {!isAboveMediumScreens && isMenuOpen && (
      <div className="fixed top-0 right-0 z-40 w-[300px] h-full bg-cf-blue bg-opacity-90">
        {/* close the menu */}
        <div className="flex justify-end p-12">
          <button
            className="rounded-full bg-cf-white p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <AiOutlineClose size={32} />
          </button>
          </div>
          {/* nav links */}
          <div className="flex flex-col ml-[33%] gap-10 text-xl font-bold text-cf-white">
            <Link
              page="Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} 
            />
            <Link page="About" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} /> 
            <Link page="Contact us" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} /> 
            <Link page="Find Hospitals" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
              </div>
              <div className="flex flex-col items-center gap-6 mt-6 text-xl font-bold text-cf-white">
              <Link page="About" selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} />
              <CTAButton setSelectedPage={setSelectedPage}>
                    Sign up
              </CTAButton>
              </div>
      </div>
    )}
    </nav>
  );
};

export default NavBar;
