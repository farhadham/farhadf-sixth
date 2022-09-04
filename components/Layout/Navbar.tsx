import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import NavbarLink from "../NavbarLink";
import { burgerSpring, navSpring } from "../../constants/motion";
import Hamburger from "../NavigationOverlay/Hamburger";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.1], [144, 100]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#10101000", "#101010ff"]
  );

  return (
    <motion.div
      className="fixed px-4% z-30 w-full flex justify-between items-center h-36 "
      style={{ height, backgroundColor }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ opacity: { duration: 0.5 }, y: burgerSpring }}
    >
      <Link href="/" passHref>
        <motion.a
          className="font-semibold text-farhadLogo py-3.5 px-4"
          whileHover={{
            backgroundColor: "#4BFFA580",
            rotate: 10,
            y: 10,
            color: "#ffffff",
          }}
          transition={{
            rotate: navSpring,
            backgroundColor: { duration: 0.3 },
          }}
        >
          Farhad
          <strong className="font-bold opacity-100 text-white"> Faraji</strong>
        </motion.a>
      </Link>
      <div className="hidden sm:flex">
        <NavbarLink title="Home" link="/" />
        <NavbarLink title="Resume" link="/" />
        <NavbarLink title="Contact" link="/" />
      </div>
      <Hamburger />
    </motion.div>
  );
};

export default Navbar;
