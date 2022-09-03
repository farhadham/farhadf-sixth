import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const Followers = ({ mouse }: any) => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const springParams = {
    damping: Math.random() * 7 + 3,
    stiffness: Math.random() * 40 + 20,
    restDelta: Math.random() * 0.009 + 0.001,
  };

  const x = useSpring(0, {
    damping: springParams.damping,
    stiffness: springParams.stiffness,
    restDelta: springParams.restDelta,
  });
  const y = useSpring(0, {
    damping: springParams.damping,
    stiffness: springParams.stiffness,
    restDelta: springParams.restDelta,
  });

  useEffect(() => {
    x.set(mouse.clientX - 8);
    y.set(mouse.clientY - 8);
  }, [mouse]);

  return (
    <>
      <motion.div
        className="h-4 w-4 rounded-full absolute"
        style={{ x, y, backgroundColor: "rgb(75, 255, 165)", opacity: 0.4 }}
      ></motion.div>
    </>
  );
};

export default Followers;
