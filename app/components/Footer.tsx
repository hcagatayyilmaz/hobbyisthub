import React from "react";
import { FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="mx-auto max-w-screen-xl flex items-center justify-between text-xl py-8 px-4">
      <div>
        <span className="text-yellow-400 font-bold">H</span>obbyist Hub
      </div>
      <div className="flex text-2xl gap-4">
        <FaDiscord />
        <FaInstagram />
        <FaTiktok />
        <FaYoutube />
      </div>
    </div>
  );
}

export default Footer;
