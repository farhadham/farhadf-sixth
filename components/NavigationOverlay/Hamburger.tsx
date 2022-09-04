import { useState } from "react";
import { motion } from "framer-motion";
import { burgerSpring } from "../../constants/motion";

const variants = {
  topOff: { rotate: 0, y: 0 },
  topOn: { rotate: 45, y: 10 },
  midOff: { x: 0 },
  midOn: { x: 80 },
  botOff: { rotate: 0, y: 0 },
  botOn: { rotate: -45, y: -10 },
};

const Hamburger = () => {
  const [burgerOn, setBurgerOn] = useState(false);

  return (
    <div
      className="sm:hidden flex flex-col gap-2 mr-3"
      onClick={() => {
        setBurgerOn(!burgerOn);
      }}
    >
      <motion.div
        className="h-0.5 w-8 bg-white rounded-full"
        animate={burgerOn ? "topOn" : "topOff"}
        variants={variants}
        transition={burgerSpring}
      ></motion.div>
      <motion.div
        className="h-0.5 w-8 bg-white rounded-full"
        animate={burgerOn ? "midOn" : "midOff"}
        variants={variants}
        transition={burgerSpring}
      ></motion.div>
      <motion.div
        className="h-0.5 w-8 bg-white rounded-full"
        animate={burgerOn ? "botOn" : "botOff"}
        variants={variants}
        transition={burgerSpring}
      ></motion.div>
    </div>
  );
};

export default Hamburger;
