import React from 'react'
import { useGLTF } from '@react-three/drei'

const Gaming_desk = (props) => {
  const { nodes, materials } = useGLTF('/models/3dmodels/gaming_desk/Gaming_desk.gltf')
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.145, -2.841, -1.506]} scale={[1, 1, 0.876]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Plastic} />
          </group>
          <group position={[-0.913, 0.552, -1.553]} scale={[0.523, 0.1, 0.339]}>
            <mesh geometry={nodes.Object_7.geometry} material={materials['7355608']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.black} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.blue_light} />
          </group>
          <group position={[-0.899, 0.474, -0.429]} rotation={[0, 0, -Math.PI]} scale={[-1.405, 0.024, 0.421]}>
            <mesh geometry={nodes.Object_11.geometry} material={materials.blue_light} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.black} />
          </group>
          <group position={[0.793, 0.465, -0.781]} scale={[0.114, 0.107, 0.204]}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.black} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.blue_light} />
          </group>
          <group position={[-2.962, 1.463, -1.59]} scale={[0.438, 1, 1.09]}>
            <mesh geometry={nodes.Object_17.geometry} material={materials.black} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.blue_light} />
            <mesh geometry={nodes.Object_19.geometry} material={materials.Plastic} />
          </group>
          <group position={[0.888, 1.043, -1.684]} rotation={[-1.702, 0, Math.PI / 2]} scale={[-0.235, 0.037, 0.235]}>
            <mesh geometry={nodes.Object_21.geometry} material={materials.black} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.blue} />
          </group>
          <group position={[0.71, 0.474, -0.754]} scale={0.576}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.Plastic} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.blue_light} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/3dmodels/gaming_desk/Gaming_desk.gltf')

export default Gaming_desk;
