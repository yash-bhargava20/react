import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="">
      <div className="text-xl flex flex-col items-center gap-4 ">
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
};

export default Social;
