import { Computer } from "../University/Computer";
import { Thinker } from "../University/Thinker";
import { Carousel } from "./Carousel";
import { Float } from "@react-three/drei";
import { Avatar } from "../Avatar";

export default function Scene(props) {
  const { section } = props;
  const isMobile = window.screen.width < 768;
  return (
    <>
      <Float speed={3} floatingRange={[-0.3, -0.4]}>
        <Thinker section={section} />
      </Float>
      <Carousel />
      <Float speed={2} rotationIntensity={0.5} floatingRange={[-0.3, 0.5]}>
        <Computer />
      </Float>
      {!isMobile && <Avatar position={[3, -14, 0]} />}
    </>
  );
}
