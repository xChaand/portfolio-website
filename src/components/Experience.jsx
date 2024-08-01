import {
  ContactShadows,
  OrbitControls,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import { Scene } from "./Scene";
import { Test } from "./Test";
import Overlay from "./Overlay";

export const Experience = () => {
  return (
    <>
      {/* <gridHelper args={[20, 20, 0xff0000, "teal"]} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <ScrollControls pages={4} damping={0.2}>
        <Scene />

        <Overlay />
      </ScrollControls>
      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
