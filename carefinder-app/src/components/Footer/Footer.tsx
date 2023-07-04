import logo from "../../assets/cflogo.png";
import { footerLinks } from "../../constants";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FooterType } from "@/shared/types";

const Footer = () => {
  return (
    <footer className="py-16 bg-cf-light-blue">
      <div className="flex-1 w-full flex flex-row justify-between flex-wrap lg:mt-0 mt-10">
        <div className="flex flex-[1] flex-col justify-start items-start gap-6 px-8">
          <div className="flex flex-row">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-3xl mt-2 font-bold text-cf-blue">CareFinder</h1>
          </div>
          <p className="font-semibold mt-1">
            CareFinder is a platform that helps you find the nearest hospital to
            you.
          </p>
        </div>
        {/* footer links */}
        <div className="w-full flex flex-[1] flex-row flex-wrap gap-24  ml-8 mt-4">
          {/* map across the links */}

          {footerLinks.map((link: FooterType) => (
            <div key={link.heading} className="flex flex-col items-start gap-6">
              <h3 className="text-medium font-bold text-cf-blue">{link.heading}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className="text-base text-cf-dark-gray hover:underline hover:"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-cf-dark-gray mt-16">
        <p className="font-poppins font-semi-bold text-center text-base leading-[27px] text-dark-gray">
          &copy; 2023 CareFinder. All rights reserved. | Developed by Sarah
          Daniel
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-2 mr-12">
          <a className="hover:text-cf-blue" href="#">
            <FaFacebook />
          </a>
          <a className="hover:text-[#00acee]" href="#">
            <FaTwitter />
          </a>
          <a className="hover:text-[#fea575]" href="#">
            <FaInstagram />
          </a>
          <a className="hover:text-[#de2f2f]" href="#">
            <FaYoutube />
          </a>
          <a className="hover:text-cf-blue" href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
