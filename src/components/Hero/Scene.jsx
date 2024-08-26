import { Computer } from "../University/Computer";
import { Thinker } from "../University/Thinker";
import { Carousel } from "./Carousel";
import { Books } from "../University/Books";
import { Float } from "@react-three/drei";
import { Avatar } from "../Avatar";
import { useControls } from "leva";

export default function Scene(props) {
  const { animation } = useControls({
    animation: {
      value: "wave",
      options: ["wave", "phone", "chillwave"],
    },
  });
  const { section } = props;
  return (
    <>
      <Float speed={3} floatingRange={[-0.3, -0.4]}>
        <Thinker section={section} />
      </Float>
      <Carousel />
      <Float speed={2} rotationIntensity={0.5} floatingRange={[-0.3, 0.5]}>
        <Computer />
      </Float>
      {/* <Float speed={2} floatIntensity={3}>
        <Books />
      </Float> */}
      <Avatar animation={animation} position={[0, -17, 0]} />
    </>
  );
}
