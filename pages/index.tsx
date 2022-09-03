import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSpring, motion, useMotionValue } from "framer-motion";
import Mouse from "../components/Mouse";

function calcAngleDegrees(x: number, y: number) {
  let mogh = x - window.outerWidth / 2;
  let moj = window.outerHeight / 2 - y;

  let result = 90 - (Math.atan2(moj, mogh) * 180) / Math.PI;

  if (result > 0) {
    return result;
  } else if (result < 0) {
    return 360 + result;
  } else {
    return 360;
  }
}

console.log(Math.atan(1));

const Home: NextPage = () => {
  const [mouseEvent, setMouseEvent] = useState({ clientX: 0, clientY: 0 });
  const rotate = useSpring(0);

  return (
    <div>
      <motion.div
        className=" h-screen w-screen "
        onMouseMove={(e) => {
          setMouseEvent(e);
          rotate.set(calcAngleDegrees(e.clientX, e.clientY));
          console.log(calcAngleDegrees(e.clientX, e.clientY));
        }}
      >
        <Mouse mouse={mouseEvent} />
        <div className="w-180 h-180 absolute rounded-full border-8 border-solid border-slate-500 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 flex justify-center items-center ">
          <div className="w-10 h-10 bg-white rounded-full opacity-50 absolute"></div>
          <motion.div
            className="bg-white -translate-y-2/4 rounded-full"
            style={{ width: 10, height: 200, rotate }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
