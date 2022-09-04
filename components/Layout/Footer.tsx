import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="bottom-0 fixed px-6% z-30 text-white flex justify-between w-full mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:visible invisible flex flex-col justify-end">
        <a href="mailto:farhadham2gmail.com">
          <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <motion.div
              className="absolute bg-myGreen w-0 h-full -z-10 opacity-50"
              animate={{ width: hover ? "100%" : "0%" }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-sm font-normal text-footerSmall mb-2 p-1 px-2"
              whileHover={{ opacity: 1, color: "#ffffff" }}
            >
              E: farhadham2@gmail.com
            </motion.p>
          </div>
        </a>
        <p className="text-sm font-normal text-footerSmall mb-0 pt-1 px-2">
          T: +90 (543) 455 21 60
        </p>
      </div>
      <div>
        <a
          href="https://github.com/farhadham"
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.div
            className="opacity-50"
            whileHover={{ opacity: 1, scale: 1.4 }}
          >
            <AiFillGithub size={24} className="mb-8 cursor-pointer" />
          </motion.div>
        </a>
        <a
          href="https://github.com/farhadham"
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.div
            className="opacity-50"
            whileHover={{ opacity: 1, scale: 1.4 }}
          >
            <AiFillLinkedin size={24} className="cursor-pointer" />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
