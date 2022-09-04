import { useState } from "react";
import { motion } from "framer-motion";
import { burgerSpring, navSpring } from "../../../constants/motion";

const Button = ({ className, title }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://linkedin.com/in/farhadfaraji"
      rel="noopener noreferrer"
      target="_blank"
    >
      <motion.div
        className={`${className} text-center font-medium border-2 border-myGreen border-solid text-myGreen cursor-pointer relative flex justify-center items-center py-5 overflow-hidden`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{ color: hover ? "#101010" : "#4BFFA5", opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -1000 }}
        transition={burgerSpring}
      >
        <p className="absolute">{title}</p>
        <motion.div
          className="w-4 h-4 bg-myGreen  absolute rounded-full -z-10"
          animate={{ scale: hover ? 15 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
    </a>
  );
};

export default Button;
