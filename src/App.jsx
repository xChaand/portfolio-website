import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import University from "./components/University/University";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState(0);
  return (
    <Canvas orthographic camera={{ zoom: 130, position: [0, 0, 100] }}>
      <ScrollControls pages={4}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll>
          <Experience section={section} />
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
