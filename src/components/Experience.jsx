import { ContactShadows, OrbitControls } from "@react-three/drei";
import Scene from "./Hero/Scene";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <gridHelper args={[20, 20, 0xff0000, "teal"]} />
      <ambientLight intensity={0.5} />
      <Scene />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
