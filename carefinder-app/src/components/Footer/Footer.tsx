import "./footer.css";
import { footerLinks } from "../../constants";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// create a footer component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-about">
          <h1 className="logo">CareFinder</h1>
          <p className="footer__content-text">
            CareFinder is a platform that helps you find the nearest hospital to
            you.
          </p>
        </div>
        <div className="footer__links">
            {/* map across the links */}
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className="footer__link-item"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2023 CareFinder. All rights reserved. | Developed by Sarah
          Daniel
        </p>
        <div className="socials">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
