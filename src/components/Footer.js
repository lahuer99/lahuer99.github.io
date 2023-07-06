import React from "react";
import maillogo from "../static/email.png";
import linkedinlogo from "../static/linkedin-logo_49656.png";
import githublogo from "../static/github-sign.png";

const Footer = () => {
  return (
    <div className="flex flex-col snap-center max-w-screen-lg mx-auto justify-between font-mono">
    <div className="flex flex-row justify-between" id="contact">
      <div className="w-1/2 text-purple-100 font-semibold uppercase text-lg hover:text-purple-400">
        HEY YOU, HIRE ME NOW!
      </div>
      <div className="items-center">
        <div className="text-gray-900 uppercase font-semibold  text-2xl mx-auto">
          Contact
        </div>
        <ul className="px-auto flex justify-center items-center my-3">
          <li className="w-5 h-10 mr-2">
            <a href="mailto:rahulme10.99@gmail.com">
              <img src={maillogo}></img>
            </a>
          </li>
          <li className="w-5 h-10 mr-2">
            <a href="https://in.linkedin.com/in/rahulbiji" target='_blank'>
              <img src={linkedinlogo}></img>
            </a>
          </li>
          <li className="w-5 h-10 mr-2">
            <a href="https://github.com/lahuer99" target="_blank">
              <img src={githublogo}></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs font-thin text-gray-400">
      &copy; Copyright 2023. Made using React and Tailwind by me.
    </div>
    </div>
  );
};

export default Footer;
