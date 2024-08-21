import { Computer } from "../University/Computer";
import { Thinker } from "../University/Thinker";
import { Carousel } from "./Carousel";
import { Books } from "../University/Books";
import { Float } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <Float speed={3} floatingRange={[-1, 0.5]}>
        <Thinker />
      </Float>
      <Carousel />
      <Float speed={3} rotationIntensity={0.5}>
        <Computer />
      </Float>
      <Float speed={2} floatIntensity={3}>
        <Books />
      </Float>
    </>
  );
}
