import React, { useEffect } from "react";
import Followers from "./Followers";
import { useSpring } from "framer-motion";

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
    x.set(mouse.pageX - 250);
    y.set(mouse.pageY - 250);
  }, [mouse]);

  return (
    <div className="sm:block hidden w-screen h-screen fixed pointer-events-none  z-50">
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
