import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Children, useState } from "react";

export default function Overlay() {
  const [op1, setOp1] = useState(1);
  const [op2, setOp2] = useState(1);
  const [op3, setOp3] = useState(1);
  const [op4, setOp4] = useState(1);
  const scroll = useScroll();
  useFrame(() => {
    setOp1(1 - scroll.range(0, 1 / 12));
    setOp2(scroll.curve(1 / 13, 1 / 13));
    setOp3(scroll.curve(1 / 3, 1 / 10));
    setOp4(scroll.curve(4 / 7, 1 / 8));
  });
  return (
    <Scroll html>
      <div
        style={{ opacity: op1 }}
        className="w-screen h-screen flex justify-center items-center p-10"
      >
        <h1 className="visible md:font-sans text-4xl md:text-7xl lg:text-9xl text-white max-sm:hidden">
          Hi I'm <span className="font-bold bg-orange-400 p-1">Chaand</span>
        </h1>
        <h1 className="md:hidden text-4xl text-white">
          Please visit again on your{" "}
          <span className="font-bold bg-orange-400 p-1">Laptop/Computer</span>
        </h1>
      </div>
      <div className="h-screen grid grid-cols-2" style={{ opacity: op2 }}>
        <h1 className="justify-self-center text-3xl md:text-4xl lg:text-7xl text-white">
          I build <span className="font-bold bg-orange-400 p-1">Software</span>
        </h1>
      </div>
      <div className="h-screen grid grid-cols-2" style={{ opacity: op3 }}>
        <h1 className="justify-self-center text-3xl md:text-4xl lg:text-7xl text-white">
          I ride{" "}
          <span className="font-bold bg-orange-400 p-1">Motorcycles</span>
        </h1>
      </div>
      <div className="h-screen grid grid-cols-2" style={{ opacity: op4 }}>
        <h1 className="justify-self-center text-3xl md:text-4xl lg:text-7xl text-white">
          I love <span className="font-bold bg-orange-400 p-1">Basketball</span>
        </h1>
      </div>
    </Scroll>
  );
}
