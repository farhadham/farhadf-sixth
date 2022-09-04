import React from "react";
import { motion } from "framer-motion";
import { burgerSpring } from "../../constants/motion";
import Button from "../common/Button";

const Header = () => {
  return (
    <header className="h-screen relative z-10 flex flex-col justify-center">
      <motion.div
        className="bg-header bg-center bg-cover w-screen absolute overflow-hidden opacity-0 -z-10 h-screen"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      ></motion.div>
      <motion.p
        className="text-xl lg:text-4xl sm:text-3xl font-regular text-white ml-20% mb-3"
        animate={{ x: 0 }}
        initial={{ x: -500 }}
        transition={burgerSpring}
      >
        Hi,
      </motion.p>
      <motion.h1
        className="text-3xl lg:text-6xl sm:text-5xl font-bold ml-20% text-myGreen mb-2"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1500, opacity: 0 }}
        transition={{ ...burgerSpring, delay: 0.2 }}
      >
        <span className="font-regular text-white">I`m</span> Farhad Faraji
      </motion.h1>
      <motion.div
        className="text-3xl lg:text-6xl sm:text-5xl font-semibold ml-20% text-white flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.h2
          initial={{ rotate: 15 }}
          animate={{
            rotate: 0,
            color: ["#4BFFA5", "#FDD935", "#632695", "#FA292A", "#4BFFA5"],
          }}
          transition={{
            rotate: {
              type: "spring",
              damping: 3,
              stiffness: 200,
              restDelta: 0.001,
              repeat: Infinity,
              repeatDelay: 1,
            },
            color: { duration: 3, repeat: Infinity },
          }}
        >
          Full-Stack
        </motion.h2>
        <motion.h2 className="ml-3">Developer</motion.h2>
      </motion.div>
      <Button className="ml-20% mt-8 w-44 " title={"Linkedin"} />
    </header>
  );
};

export default Header;
