import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import University from "./components/University/University";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Canvas orthographic camera={{ zoom: 130, position: [0, 0, 100] }}>
      <ScrollControls pages={4}>
        <Scroll>
          <Experience />
        </Scroll>
        <Scroll html>
          <Hero />
          <University />
          <Projects />
          <Contact />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
