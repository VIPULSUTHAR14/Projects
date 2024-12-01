import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const JavascriptLogo = (props) => {
  const javascriptref = useRef();
  useGSAP(()=>{
    gsap.to(javascriptref.current.position, 
      {y: javascriptref.current.position.y + 0.2,
         duration: 2.5, 
         repeat: -1, 
         yoyo: 'true'})
  })

  const { nodes, materials } = useGLTF('/skillsLogo/javascript_logo/JavascriptLogo.gltf')
  return (
    <group ref={javascriptref}  dispose={null}>
      <mesh {...props} geometry={nodes.Object_2.geometry} material={materials.mat_3220964} scale={0.04} rotation={[Math.PI,Math.PI,-Math.PI/2]} />
    </group>
  )
}

useGLTF.preload('/skillsLogo/javascript_logo/JavascriptLogo.gltf')

export default JavascriptLogo;
