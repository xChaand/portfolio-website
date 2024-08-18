/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/books.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Books(props) {
  const { nodes, materials } = useGLTF("models/books.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0.561, 0]} scale={[0.09, 0.016, 0.127]}>
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials.Basketball}
        />
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials.OffWhite}
        />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube012_3.geometry} material={materials.Yellow} />
        <mesh
          geometry={nodes.Cube012_4.geometry}
          material={materials.BabyBlue}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/books.glb");
