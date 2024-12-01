import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Html_Logo = (props) => {
  const Htmlref = useRef();
  const { nodes, materials } = useGLTF('/skillsLogo/html_logo_3d_model/Html_Logo.gltf')
  useGSAP(() => {
    gsap.to(Htmlref.current.position,{
      y: Htmlref.current.position.y + 0.2,
      duration: 2.5,
      repeat: -1,
      yoyo: 'true'
    })
    // gsap.to(Htmlref.current.scale,{
    //   y: Htmlref.current.scale.y +0.07,
    //   x: Htmlref.current.scale.x +0.07,
    //   z: Htmlref.current.scale.z +0.07,
    //   duration: 0.5,
    //   repeat: -1,
    //   yoyo: 'true'  
    // })
  })
  return (
    <group ref={Htmlref}  dispose={null}>
      <group {...props} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[24.052, 117.48, 10.526]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.011']} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.009']} position={[18.962, 117.48, 10.526]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.012']} position={[42.712, 209.044, 23.565]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/skillsLogo/html_logo_3d_model/Html_Logo.gltf')

export default Html_Logo;