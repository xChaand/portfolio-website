import { Float } from "@react-three/drei";
import { Computer } from "../University/Computer";
import { Thinker } from "../University/Thinker";
import { Carousel } from "./Carousel";
import { Books } from "../University/Books";

export default function Scene() {
  return (
    <>
      <Float speed={10}>
        <Thinker />
      </Float>
      <Carousel />
      <Float speed={6} rotationIntensity={0.5} floatingRange={40}>
        <Computer />
      </Float>
      <Float speed={4} floatIntensity={3}>
        <Books />
      </Float>
    </>
  );
}
