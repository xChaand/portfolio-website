import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 20, 20]} intensity={1} />
      <Scene />
    </>
  );
};
