import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 90, position: [0, 0, 100] }}
      frameloop="always"
    >
      <Experience />
    </Canvas>
  );
}

export default App;
