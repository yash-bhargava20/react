import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "RESOURCES",
      links: [
        { name: "Documentation", url: "#" },
        { name: "About Us", url: "/About" },
        { name: "Blog", url: "" },
        { name: "Pricing", url: "" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Help Center", url: "" },
        { name: "Privacy Policy", url: "" },
        { name: "Terms and Conditions", url: "" },
      ],
    },
    {
      title: "CONTACT US",
      links: [
        { name: "XXX,Floor 4", url: "" },
        { name: "Banglore,Karnataka", url: "" },
        { name: "xyz@gamil.com", url: "" },
      ],
    },
  ];
  const socialLinks = [
    { name: "X", icon: <FontAwesomeIcon icon={faXTwitter} />, url: "" },
    { name: "YouTube", icon: <FontAwesomeIcon icon={faInstagram} />, url: "" },
    { name: "LinkedIn", icon: <FontAwesomeIcon icon={faLinkedin} />, url: "" },
    { name: "Instagram", icon: <FontAwesomeIcon icon={faYoutube} />, url: "" },
  ];
  return (
    <>
      <footer className="bg-slate-900 text-white w-full mt-24 py-10 ">
        <div className="mx-auto px-6">
          <div className=" flex justify-around">
            <div>
              <h1 className="text-lg font-bold">Logo</h1>
            </div>
            <div className="flex gap-3 justify-around w-1/2">
              {sections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold ">{section.title}</h4>
                  <ul className="mt-3">
                    {section.links.map((link, inx) => (
                      <li key={inx}>
                        <Link to={link.url} className="font-light text-sm ">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-8 border-t border-gray-300">
            <div className="font-light text-sm my-5 px-4">
              &copy; 2024 My Website. All right are reserved.
            </div>
            <div className="flex items-center justify-center space-x-6 my-5 px-4">
              {socialLinks.map((social, index) => (
                <Link key={index} to={social.url} className="">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
