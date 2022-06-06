/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: forpinik (https://sketchfab.com/forpinik)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/watch-700d1a22ed0b405fb58cd4ba74bcdaa1
title: Watch
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
        <group rotation={[Math.PI / 2, 0, 0]} userData={{ name: '2d6fb9c83fae49a6a04a7d7e495a47f0.fbx' }}>
          <group userData={{ name: 'RootNode' }}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'watch body bottom_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_body_bottom_low_watch_body_bottom_0.geometry} material={materials.watch_body_bottom} userData={{ name: 'watch body bottom_low_watch body bottom_0' }} />
            </group>
            <group position={[-0.83, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'watch head_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_head_low_watch_head_0.geometry} material={materials.watch_head} userData={{ name: 'watch head_low_watch head_0' }} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'watch body top_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_body_top_low_watch_body_top_0.geometry} material={materials.watch_body_top} userData={{ name: 'watch body top_low_watch body top_0' }} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'watch inside_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_inside_low_watch_inside_0.geometry} material={materials.watch_inside} userData={{ name: 'watch inside_low_watch inside_0' }} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'watch pointers' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_pointers_pointers_0.geometry} material={materials.pointers} userData={{ name: 'watch pointers_pointers_0' }} />
            </group>
            <group position={[-1.16, 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'belt small part_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.belt_small_part_low_belt_small_lether_0.geometry} material={materials.belt_small_lether} userData={{ name: 'belt small part_low_belt small lether_0' }} />
            </group>
            <group position={[-0.85, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'belt fixer_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.belt_fixer_low_belt_fixer_0.geometry} material={materials.belt_fixer} userData={{ name: 'belt fixer_low_belt fixer_0' }} />
            </group>
            <group position={[-0.01, -0.58, -36.05]} rotation={[-Math.PI / 2, 0, 0]} scale={19.8} userData={{ name: 'belt02_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.belt02_low_belt_02_0.geometry} material={materials.belt_02} userData={{ name: 'belt02_low_belt 02_0' }} />
            </group>
            <group position={[0.55, -2.42, 54.55]} rotation={[-Math.PI / 2, 0, 0]} scale={19.88} userData={{ name: 'belt01_low' }}>
              <mesh castShadow receiveShadow geometry={nodes.belt01_low_belt_01_0.geometry} material={materials.belt_01} userData={{ name: 'belt01_low_belt 01_0' }} />
            </group>
            <group position={[-2.43, -5.88, 36.14]} rotation={[-Math.PI / 2, 0, 0]} scale={38.23} userData={{ name: 'watch glass_high.001' }}>
              <mesh castShadow receiveShadow geometry={nodes.watch_glass_high001_watch_glass_0.geometry} material={materials.watch_glass} userData={{ name: 'watch glass_high.001_watch glass_0' }} />
            </group>
            <group position={[-2.43, -5.88, 36.14]} rotation={[-Math.PI / 2, 0, 0]} scale={38.23} userData={{ name: 'stitches' }}>
              <mesh castShadow receiveShadow geometry={nodes.stitches_stitches_0.geometry} material={materials.stitches} userData={{ name: 'stitches_stitches_0' }} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
