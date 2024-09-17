import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
// import { NavLink } from "react-router-dom";
import "./Footer.css";

import footerContact from "../API/footerContact.json";

const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-contacts">
            {footerContact.map((curData, index) => {
              const { icon, title, details } = curData;
              return (
                <div key={index} className="footer-contact">
                  <div className="icon">{iconMap[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
      <div className="copyright-section">
        <p>
          &copy; {new Date().getFullYear()} Devedra Parmar. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
