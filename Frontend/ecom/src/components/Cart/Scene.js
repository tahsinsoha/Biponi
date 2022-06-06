/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Juan Martinez Sanjurjo (https://sketchfab.com/JuanSanjurjo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/advanced-game-characters-week-2-jacket-8f211f057bb24f5db17ca659553b716b
title: Advanced Game Characters - Week 2 Jacket
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  console.log("props in Model ", props)
  const group = useRef()
  const { nodes, materials } = useGLTF(`/${props.productId}.glb`)
  
  if(props.productId=="629484e5e3acff4e1c71a7e4")
  {
    return (
      <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
        <group userData={{ name: 'root' }}>
         <group rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'GLTF_SceneRootNode' }}>
            <group position={[0.39, 0.3, 0.32]} scale={[0.05, 0.02, 0.05]} userData={{ name: 'Cube.015_1' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.006']} userData={{ name: 'Object_4' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['Material.031']} userData={{ name: 'Object_5' }} />
            </group>
            <group position={[0.48, 0.24, 0.12]} scale={[0.82, 1, 1]} userData={{ name: 'Cube_2' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.025']} userData={{ name: 'Object_7' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['Material.002']} userData={{ name: 'Object_8' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Material.007']} userData={{ name: 'Object_9' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Material.005']} userData={{ name: 'Object_10' }} />
            </group>
            <group position={[0.48, 0.29, -0.28]} rotation={[0.02, 0, 0]} scale={[0.82, 1, 1]} userData={{ name: 'Plane_3' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['Material.006']} userData={{ name: 'Object_12' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials['Material.007']} userData={{ name: 'Object_13' }} />
             </group>
             <group position={[0.48, 0.32, 0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.61, 1]} userData={{ name: 'Cube.001_4' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials['Material.025']} userData={{ name: 'Object_15' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials['Material.003']} userData={{ name: 'Object_16' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials['Material.004']} userData={{ name: 'Object_17' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials['Material.008']} userData={{ name: 'Object_18' }} />
            </group>
            <group position={[0.47, 0.19, 0.66]} userData={{ name: 'Plane.001_5' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials['Material.025']} userData={{ name: 'Object_20' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials['Material.002']} userData={{ name: 'Object_21' }} />
             </group>
             <group position={[1.37, 0.18, 0.66]} scale={[1, 1.72, 1]} userData={{ name: 'Cube.002_6' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials['Material.007']} userData={{ name: 'Object_23' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials['Material.006']} userData={{ name: 'Object_24' }} />
             </group>
             <group position={[1.4, 0.3, 0.72]} rotation={[0.17, 0, 0]} scale={[1.2, 0.95, 0.95]} userData={{ name: 'Cube.003_7' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials['Material.005']} userData={{ name: 'Object_26' }} />
             </group>
             <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.004_8' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials['Material.010']} userData={{ name: 'Object_28' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials['Material.011']} userData={{ name: 'Object_29' }} />
             </group>
            <group position={[1.4, 0.26, 0.07]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.005_9' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials['Material.010']} userData={{ name: 'Object_31' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials['Material.011']} userData={{ name: 'Object_32' }} />
             </group>
             <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.006_10' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials['Material.010']} userData={{ name: 'Object_34' }} />
              <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials['Material.011']} userData={{ name: 'Object_35' }} />
             </group>
             <group position={[0.48, 0.24, 0.16]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.007_11' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials['Material.005']} userData={{ name: 'Object_37' }} />
             </group>
             <group position={[-0.43, 0.26, 0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.008_12' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials['Material.010']} userData={{ name: 'Object_39' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials['Material.011']} userData={{ name: 'Object_40' }} />
             </group>
            <group position={[0.48, 0.24, 0.24]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.009_13' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials['Material.005']} userData={{ name: 'Object_42' }} />
             </group>
            <group position={[-0.43, 0.26, 0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.010_14' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials['Material.010']} userData={{ name: 'Object_44' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials['Material.011']} userData={{ name: 'Object_45' }} />
             </group>
             <group position={[0.48, 0.22, 0.67]} rotation={[0, -Math.PI / 2, 0]} scale={[0.02, 0, 0.04]} userData={{ name: 'Cube.011_15' }}>
              <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials['Material.010']} userData={{ name: 'Object_47' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials['Material.011']} userData={{ name: 'Object_48' }} />
             </group>
            <group position={[0.46, 1.04, 0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.1, 0.1]} userData={{ name: 'Circle_16' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials['Material.025']} userData={{ name: 'Object_50' }} />
             </group>
             <group position={[-0.46, 0.26, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0, 0.02]} userData={{ name: 'Cube.012_17' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials['Material.010']} userData={{ name: 'Object_52' }} />
               <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials['Material.011']} userData={{ name: 'Object_53' }} />
             </group>
             <group position={[-0.5, 0.26, 0.01]} rotation={[0, 0, -Math.PI / 2]} scale={0} userData={{ name: 'Plane.002_18' }}>
               <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.material_0} userData={{ name: 'Object_55' }} />
             </group>
           </group>
         </group>
       </group>
     </group>
    )
  }
  if( props.productId=="6288fca2cf6785cbfd5d8d23" )
  {
    return (
      <group ref={group} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Jacket_Lv2_Jacket} />
          </group> 
        </group>
      </group>
    )
  }
//   else if (props.userId=="629484e5e3acff4e1c71a7e4") {
//     return(
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
//         <group userData={{ name: 'root' }}>
//          <group rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'GLTF_SceneRootNode' }}>
//             <group position={[0.39, 0.3, 0.32]} scale={[0.05, 0.02, 0.05]} userData={{ name: 'Cube.015_1' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.006']} userData={{ name: 'Object_4' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['Material.031']} userData={{ name: 'Object_5' }} />
//             </group>
//             <group position={[0.48, 0.24, 0.12]} scale={[0.82, 1, 1]} userData={{ name: 'Cube_2' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.025']} userData={{ name: 'Object_7' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['Material.002']} userData={{ name: 'Object_8' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Material.007']} userData={{ name: 'Object_9' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Material.005']} userData={{ name: 'Object_10' }} />
//             </group>
//             <group position={[0.48, 0.29, -0.28]} rotation={[0.02, 0, 0]} scale={[0.82, 1, 1]} userData={{ name: 'Plane_3' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['Material.006']} userData={{ name: 'Object_12' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials['Material.007']} userData={{ name: 'Object_13' }} />
//              </group>
//              <group position={[0.48, 0.32, 0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.61, 1]} userData={{ name: 'Cube.001_4' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials['Material.025']} userData={{ name: 'Object_15' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials['Material.003']} userData={{ name: 'Object_16' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials['Material.004']} userData={{ name: 'Object_17' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials['Material.008']} userData={{ name: 'Object_18' }} />
//             </group>
//             <group position={[0.47, 0.19, 0.66]} userData={{ name: 'Plane.001_5' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials['Material.025']} userData={{ name: 'Object_20' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials['Material.002']} userData={{ name: 'Object_21' }} />
//              </group>
//              <group position={[1.37, 0.18, 0.66]} scale={[1, 1.72, 1]} userData={{ name: 'Cube.002_6' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials['Material.007']} userData={{ name: 'Object_23' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials['Material.006']} userData={{ name: 'Object_24' }} />
//              </group>
//              <group position={[1.4, 0.3, 0.72]} rotation={[0.17, 0, 0]} scale={[1.2, 0.95, 0.95]} userData={{ name: 'Cube.003_7' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials['Material.005']} userData={{ name: 'Object_26' }} />
//              </group>
//              <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.004_8' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials['Material.010']} userData={{ name: 'Object_28' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials['Material.011']} userData={{ name: 'Object_29' }} />
//              </group>
//             <group position={[1.4, 0.26, 0.07]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.005_9' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials['Material.010']} userData={{ name: 'Object_31' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials['Material.011']} userData={{ name: 'Object_32' }} />
//              </group>
//              <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.006_10' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials['Material.010']} userData={{ name: 'Object_34' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials['Material.011']} userData={{ name: 'Object_35' }} />
//              </group>
//              <group position={[0.48, 0.24, 0.16]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.007_11' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials['Material.005']} userData={{ name: 'Object_37' }} />
//              </group>
//              <group position={[-0.43, 0.26, 0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.008_12' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials['Material.010']} userData={{ name: 'Object_39' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials['Material.011']} userData={{ name: 'Object_40' }} />
//              </group>
//             <group position={[0.48, 0.24, 0.24]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.009_13' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials['Material.005']} userData={{ name: 'Object_42' }} />
//              </group>
//             <group position={[-0.43, 0.26, 0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.010_14' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials['Material.010']} userData={{ name: 'Object_44' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials['Material.011']} userData={{ name: 'Object_45' }} />
//              </group>
//              <group position={[0.48, 0.22, 0.67]} rotation={[0, -Math.PI / 2, 0]} scale={[0.02, 0, 0.04]} userData={{ name: 'Cube.011_15' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials['Material.010']} userData={{ name: 'Object_47' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials['Material.011']} userData={{ name: 'Object_48' }} />
//              </group>
//             <group position={[0.46, 1.04, 0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.1, 0.1]} userData={{ name: 'Circle_16' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials['Material.025']} userData={{ name: 'Object_50' }} />
//              </group>
//              <group position={[-0.46, 0.26, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0, 0.02]} userData={{ name: 'Cube.012_17' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials['Material.010']} userData={{ name: 'Object_52' }} />
//                <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials['Material.011']} userData={{ name: 'Object_53' }} />
//              </group>
//              <group position={[-0.5, 0.26, 0.01]} rotation={[0, 0, -Math.PI / 2]} scale={0} userData={{ name: 'Plane.002_18' }}>
//                <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.material_0} userData={{ name: 'Object_55' }} />
//              </group>
//            </group>
//          </group>
//        </group>
//      </group>
//  )

//   }
}

// export default function Laptop_model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
//         <group userData={{ name: 'root' }}>
//           <group rotation={[Math.PI / 2, 0, 0]} userData={{ name: 'GLTF_SceneRootNode' }}>
//             <group position={[0.39, 0.3, 0.32]} scale={[0.05, 0.02, 0.05]} userData={{ name: 'Cube.015_1' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials['Material.006']} userData={{ name: 'Object_4' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials['Material.031']} userData={{ name: 'Object_5' }} />
//             </group>
//             <group position={[0.48, 0.24, 0.12]} scale={[0.82, 1, 1]} userData={{ name: 'Cube_2' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials['Material.025']} userData={{ name: 'Object_7' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials['Material.002']} userData={{ name: 'Object_8' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials['Material.007']} userData={{ name: 'Object_9' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials['Material.005']} userData={{ name: 'Object_10' }} />
//             </group>
//             <group position={[0.48, 0.29, -0.28]} rotation={[0.02, 0, 0]} scale={[0.82, 1, 1]} userData={{ name: 'Plane_3' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials['Material.006']} userData={{ name: 'Object_12' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials['Material.007']} userData={{ name: 'Object_13' }} />
//             </group>
//             <group position={[0.48, 0.32, 0.72]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.61, 1]} userData={{ name: 'Cube.001_4' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials['Material.025']} userData={{ name: 'Object_15' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials['Material.003']} userData={{ name: 'Object_16' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials['Material.004']} userData={{ name: 'Object_17' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials['Material.008']} userData={{ name: 'Object_18' }} />
//             </group>
//             <group position={[0.47, 0.19, 0.66]} userData={{ name: 'Plane.001_5' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials['Material.025']} userData={{ name: 'Object_20' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials['Material.002']} userData={{ name: 'Object_21' }} />
//             </group>
//             <group position={[1.37, 0.18, 0.66]} scale={[1, 1.72, 1]} userData={{ name: 'Cube.002_6' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials['Material.007']} userData={{ name: 'Object_23' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials['Material.006']} userData={{ name: 'Object_24' }} />
//             </group>
//             <group position={[1.4, 0.3, 0.72]} rotation={[0.17, 0, 0]} scale={[1.2, 0.95, 0.95]} userData={{ name: 'Cube.003_7' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials['Material.005']} userData={{ name: 'Object_26' }} />
//             </group>
//             <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.004_8' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials['Material.010']} userData={{ name: 'Object_28' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials['Material.011']} userData={{ name: 'Object_29' }} />
//             </group>
//             <group position={[1.4, 0.26, 0.07]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.005_9' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials['Material.010']} userData={{ name: 'Object_31' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials['Material.011']} userData={{ name: 'Object_32' }} />
//             </group>
//             <group position={[1.4, 0.26, 0.14]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.006_10' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials['Material.010']} userData={{ name: 'Object_34' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials['Material.011']} userData={{ name: 'Object_35' }} />
//             </group>
//             <group position={[0.48, 0.24, 0.16]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.007_11' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials['Material.005']} userData={{ name: 'Object_37' }} />
//             </group>
//             <group position={[-0.43, 0.26, 0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.008_12' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials['Material.010']} userData={{ name: 'Object_39' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials['Material.011']} userData={{ name: 'Object_40' }} />
//             </group>
//             <group position={[0.48, 0.24, 0.24]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.82, 1, 1]} userData={{ name: 'Cube.009_13' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials['Material.005']} userData={{ name: 'Object_42' }} />
//             </group>
//             <group position={[-0.43, 0.26, 0.21]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.02, 0, 0.03]} userData={{ name: 'Cube.010_14' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials['Material.010']} userData={{ name: 'Object_44' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials['Material.011']} userData={{ name: 'Object_45' }} />
//             </group>
//             <group position={[0.48, 0.22, 0.67]} rotation={[0, -Math.PI / 2, 0]} scale={[0.02, 0, 0.04]} userData={{ name: 'Cube.011_15' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials['Material.010']} userData={{ name: 'Object_47' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials['Material.011']} userData={{ name: 'Object_48' }} />
//             </group>
//             <group position={[0.46, 1.04, 0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.1, 0.1]} userData={{ name: 'Circle_16' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials['Material.025']} userData={{ name: 'Object_50' }} />
//             </group>
//             <group position={[-0.46, 0.26, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.01, 0, 0.02]} userData={{ name: 'Cube.012_17' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials['Material.010']} userData={{ name: 'Object_52' }} />
//               <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials['Material.011']} userData={{ name: 'Object_53' }} />
//             </group>
//             <group position={[-0.5, 0.26, 0.01]} rotation={[0, 0, -Math.PI / 2]} scale={0} userData={{ name: 'Plane.002_18' }}>
//               <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.material_0} userData={{ name: 'Object_55' }} />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }


useGLTF.preload('/jacket_model.glb')
useGLTF.preload('laptop_model.glb')