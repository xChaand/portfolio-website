import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Overlay() {
  const [op, setOp] = useState(1);
  const scroll = useScroll();
  useFrame(() => {
    setOp(1 - scroll.range(0, 1 / 12));
  });
  return (
    <Scroll html>
      <div
        style={{ opacity: op }}
        className="w-screen h-screen flex justify-center items-center p-10"
      >
        <h1 className="font-sans text-4xl md:text-7xl lg:text-9xl text-white">
          Hi I'm <span className="font-bold bg-orange-400 p-1">Chaand</span>
        </h1>
      </div>
    </Scroll>
  );
}
