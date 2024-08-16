/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/carousel.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export function Carousel(props) {
  const screenSize = window.screen.width;
  console.log(screenSize);

  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: Math.PI / 8,
    },
    to: [
      {
        carouselRotation: (-2 * Math.PI) / 3 + Math.PI / 8,
        delay: 1000,
      },
      {
        carouselRotation: (-Math.PI * 4) / 3 + Math.PI / 8,
        delay: 1000,
      },
      {
        carouselRotation: (-6 * Math.PI) / 3 + Math.PI / 8,
        delay: 1000,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true,
  });
  const { nodes, materials } = useGLTF("/models/carousel.glb");
  return (
    <group {...props} dispose={null}>
      <animated.group
        scale={
          screenSize > 768
            ? [0.919 * 0.75, 1 * 0.75, 0.919 * 0.75]
            : [0.919 * 0.4, 1 * 0.4, 0.919 * 0.4]
        }
        position={screenSize > 768 ? [3.25, -0.6, 0] : [0, -2, 0]}
        rotation-x={Math.PI / 6}
        rotation-y={carouselRotation}
      >
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["Basketball.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Pink.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Gray.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Black.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_4.geometry}
          material={materials["OffWhite.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_5.geometry}
          material={materials["RedSmooth.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_6.geometry}
          material={materials["Tan.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_7.geometry}
          material={materials["Red.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_8.geometry}
          material={materials["BasketBallLines.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_9.geometry}
          material={materials.GreenDark}
        />
        <mesh
          geometry={nodes.Cylinder001_10.geometry}
          material={materials["BabyBlue.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_11.geometry}
          material={materials["Oil.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_12.geometry}
          material={materials["Yellow.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_13.geometry}
          material={materials["RedLigth.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_14.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cylinder001_15.geometry}
          material={materials["Green.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_16.geometry}
          material={materials["Material.005"]}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload("/models/carousel.glb");
