import { Books } from "../University/Books";
import { Computer } from "../University/Computer";
import { Thinker } from "../University/Thinker";
import { Carousel } from "./Carousel";

export default function Scene() {
  return (
    <>
      <Thinker />
      <Carousel />
      <Computer />
      <Books />
    </>
  );
}
