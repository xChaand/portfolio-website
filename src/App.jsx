import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Hero from "./components/Hero";

function App() {
  return (
    <Canvas>
      <ScrollControls>
        <Experience />
        <Scroll html>
          <Hero />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
