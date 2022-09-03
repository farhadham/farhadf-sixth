import React, { useEffect } from "react";
import Followers from "./Followers";
import { motion, useSpring } from "framer-motion";

const Mouse = ({ mouse }: any) => {
  const x = useSpring(0, {
    damping: 10,
    stiffness: 10,
    restDelta: 0.001,
  });
  const y = useSpring(0, {
    damping: 10,
    stiffness: 10,
    restDelta: 0.001,
  });

  useEffect(() => {
    x.set(mouse.clientX - 250);
    y.set(mouse.clientY - 250);
  }, [mouse]);

  return (
    <div>
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
      <Followers mouse={mouse} />
    </div>
  );
};

export default Mouse;
