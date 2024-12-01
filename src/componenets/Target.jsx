import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
const Target = (props) => {
    const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  useGSAP(()=>{
    gsap.to(targetRef.current.position,{
        y: targetRef.current.position.y + 0.5,
        x: targetRef.current.position.x + 0.5,  
        z: targetRef.current.position.z + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: 'true'
    })

    // gsap.to(targetRef.current.rotation, {
    //     y: targetRef.current.rotation.y + Math.PI*4,
    //     duration: 2.5,
    //     repeat: -2,
    //     yoyo: 'true'
        
    // })
  })

  return (
    <mesh {...props} ref={targetRef} >
        <primitive object={scene} />
    </mesh>
  )
}

export default Target
