import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project1 projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
