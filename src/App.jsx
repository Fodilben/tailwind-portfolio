import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";

const App = () => {
  return (
    <div className="font-bold">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
    </div>
  );
};
export default App;
