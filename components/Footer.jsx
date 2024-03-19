import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerMenu = ["Features", "Integrations", "Pricing", "FAQ"];
  const footerMenu2 = ["Privacy", "Terms of Services"];
  return (
    <footer className=" px-4 devide-y bg-[#0A1022] text-gray-100">
      <div className=" container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className=" lg:w-1/3">
          <a className="logo" href="/">
            <img src="assets/images/logo.png" alt="webAI" className="h-10" />
          </a>
        </div>
        <div className=" grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className=" space-y-3">
            <h3 className=" tracki font-semibold uppercase text-[#CAC0B3]">
              Product
            </h3>
            <ul className=" space-y-1 text-[#99928E]">
              {footerMenu.map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" space-y-3">
            <h3 className=" tracki uppercase font-semibold text-[#CAC0B3]">
              Company
            </h3>
            <ul className=" space-y-1 text-[#99928E]">
              {["Privacy", "Terms of Services"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" space-y-3">
            <h3 className=" tracki uppercase font-semibold text-[#CAC0B3]">
              Developers
            </h3>
            <ul className=" space-y-1 text-[#99928E]">
              {["Public API", "Documentation", "Guides"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className=" uppercase font-semibold text-[#CAC0B3]">
              Social Media
            </div>
            <div className=" flex justify-start space-x-3 text-[#99928E]">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className=" flex items-center"
              >
                <FaFacebook size={22} />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className=" flex items-center "
              >
                <FaInstagram size={22} />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="X"
                className=" flex items-center"
              >
                <FaTwitter size={22} />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Linkedin"
                className=" flex items-center"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6 text-sm text-center border-[#CAC0B3] border-t-[1px] text-gray-500">
        @ 2023 Co. All rights reserved by the author.
      </div>
    </footer>
  );
};

export default Footer;
