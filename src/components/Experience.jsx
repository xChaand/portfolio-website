import { ContactShadows, OrbitControls } from "@react-three/drei";
import Scene from "./Hero/Scene";
import { useRef } from "react";

export const Experience = (props) => {
  const { section } = props;
  return (
    <>
      <ambientLight intensity={0.5} />
      <Scene section={section} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
