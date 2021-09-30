import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Results from "./Results";
import Team from "./Team";
import Partners from "./Partners";
import Footer from "./Footer";
function Main(props) {
  return (
    <div>
      <Header
        title="UkrTeenScience"
        subtitle="У ґазди є ж бо гевеї, які шиють прості килими, наче хащі фацелій"
      />
      <Intro />
      <About />
      <Projects />
      <Results />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default Main;
