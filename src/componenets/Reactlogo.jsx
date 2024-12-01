import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Reactlogo = (props) =>{
  const reactref = useRef();
  const { nodes, materials } = useGLTF('/skillsLogo/react_logo/Reactlogo.gltf')
  useGSAP(()=>{
    gsap.to(reactref.current.position, {
      y: reactref.current.position.y + 0.2,
      // x: reactref.current.position.x + 0.3,
      // z: reactref.current.position.z + 0.3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
    })
    // gsap.to(reactref.current.rotation,{
    //   y: reactref.current.rotation.y* Math.PI,
    //   duration: 2.5,
    //   repeat: -1,
    //   ease:'linear'
    // })
  })
  return (
    <group
    ref={reactref} 
    dispose={null}
    speed={0.5}
    floatingRange={[-0.01, 0.01]}    
    >
      <group {...props} scale={0.01}>
        <mesh  geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 18.102]} rotation={[0, 0, -Math.PI / 2]} scale={8} />
      </group>
    </group>
  )
}

useGLTF.preload('/skillsLogo/react_logo/Reactlogo.gltf')

export default Reactlogo;