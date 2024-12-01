import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Css_Logo = (props) => {
  const CssRef = useRef();
  const { nodes, materials } = useGLTF('/skillsLogo/css_logo/Css_Logo.gltf')
  useGSAP(()=>{
    gsap.to(CssRef.current.position , {
      y: CssRef.current.position.y + 0.2,
      duration: 2.5,
      repeat: -1,
      yoyo: true,    
  })
  })
  return (
    <group ref={CssRef}  dispose={null}>
      <group {...props} rotation={[-Math.PI / 2, 0, -1.578]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[20.789, 136.746, 10.172]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[326.27, 35.487, 1926.616]}>
              <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
              <mesh geometry={nodes.Object_8.geometry} material={materials['Material.003']} />
            </group>
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.005']} position={[-142.941, -32.748, -5922.869]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.001']} position={[-182.684, 35.487, 1926.616]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/skillsLogo/css_logo/Css_Logo.gltf')

export default Css_Logo;
