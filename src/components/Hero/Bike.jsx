/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/bike.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Bike(props) {
  const { nodes, materials } = useGLTF("models/bike.glb");
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Black.003"]}
      />
      <mesh
        geometry={nodes.Cube007_1.geometry}
        material={materials["RedSmooth.002"]}
      />
      <mesh
        geometry={nodes.Cube007_2.geometry}
        material={materials["OffWhite.003"]}
      />
      <mesh
        geometry={nodes.Cube007_3.geometry}
        material={materials["Black.003"]}
      />
      <mesh
        geometry={nodes.Cube007_4.geometry}
        material={materials["Tan.003"]}
      />
      <mesh
        geometry={nodes.Cube007_5.geometry}
        material={materials["Red.003"]}
      />
      <mesh
        geometry={nodes.Cube007_6.geometry}
        material={materials["Yellow.003"]}
      />
    </group>
  );
}

useGLTF.preload("models/bike.glb");
