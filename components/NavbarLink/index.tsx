import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navSpring } from "../../constants/motion";

const NavbarLink = ({ title, link }: any) => {
  return (
    <motion.div
      className="font-semibold text-farhadLogo py-3.5 px-4 ml-4"
      whileHover={{
        backgroundColor: "#4BFFA580",
        rotate: 7,
        y: 7,
        color: "#ffffffff",
      }}
      transition={{
        rotate: navSpring,
        backgroundColor: { duration: 0.3 },
      }}
    >
      <Link href={link} passHref>
        <motion.a>{title}</motion.a>
      </Link>
    </motion.div>
  );
};

export default NavbarLink;
