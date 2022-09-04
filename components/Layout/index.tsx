import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import Mouse from "../Mouse";

const Layout = ({ children }: any) => {
  const [mouseEvent, setMouseEvent] = useState({ clientX: 0, clientY: 0 });

  return (
    <div
      onMouseMove={(e) => {
        setMouseEvent(e);
      }}
    >
      <Mouse mouse={mouseEvent} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
