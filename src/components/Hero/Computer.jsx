/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/computer.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("models/computer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.keyboard002.geometry} material={materials.Black} />
      <mesh geometry={nodes.keyboard002_1.geometry} material={materials.Gray} />
      <mesh
        geometry={nodes.keyboard002_2.geometry}
        material={materials.OffWhite}
      />
      <mesh
        geometry={nodes.keyboard002_3.geometry}
        material={materials.Green}
      />
    </group>
  );
}

useGLTF.preload("models/computer.glb");
