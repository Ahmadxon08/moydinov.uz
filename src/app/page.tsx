import React from "react";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "../../components/Grid";
import RecentProjects from "../../components/RecentProjects";
import { navItems } from "../../data";
import Experience from "../../components/Experients";
import Approach from "../../components/Approach";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <main className="flex overflow-hidden sm:px-[100px] flex-col bg-black-100 justify-center items-center sm:10 mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
