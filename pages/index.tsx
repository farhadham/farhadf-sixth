import type { NextPage } from "next";
import Head from "next/head";
import Mouse from "../components/Mouse";
import Header from "../components/Header";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div>
      <div className="mx-0 sm:mx-20%">
        <Header />
        <About />
      </div>
    </div>
  );
};

export default Home;
