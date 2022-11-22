import Image from "next/image";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

import icon from "../assets/images/icon.png";

import type { FC } from "react";

const Footer: FC = () => (
  <footer className="container footer items-center border-t border-white/10 p-4 text-neutral-content">
    <div className="grid-flow-col items-center gap-4">
      <Image src={icon} alt="Logo" width={36} />
      <p>Copyright © 2022 - All right reserved</p>
    </div>

    <div className="grid-flow-col items-center gap-4 text-xl md:place-self-center md:justify-self-end">
      <a href="https://twitter.com/relaxxplss" className="hover:text-primary">
        <FiTwitter />
      </a>
      <a
        href="https://github.com/relaxxpls/told-so"
        className="hover:text-primary"
      >
        <FiGithub />
      </a>
      <a
        href="mailto:desai.laxman2001@gmail.com"
        className="hover:text-primary"
      >
        <FiMail />
      </a>
    </div>
  </footer>
);

export default Footer;
