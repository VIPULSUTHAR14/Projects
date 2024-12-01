  import React from 'react'
  import { useGLTF } from '@react-three/drei'

  const Gaming_setup =(props) => {
    const { nodes, materials }  = useGLTF('/models/3dmodels/gaming_setup/Gaming_setup.gltf')
    return (
      <group {...props} dispose={null}>
        <group>
          <mesh geometry={nodes.Object_2.geometry} material={materials['29113998']} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.Fuss_rot} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['Gehuse_grau.Stecker']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Fuss_grau} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.PC_Base_Foot} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.PC_Bolts} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.PC_Color_Emission} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.PC_GPU_Geforce} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.PC_GPU_Geforce} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.PC_Fan_Metal} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.PC_GPU_Gray} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.PC_Button} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.PC_GPU_White} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.PC_Glass_Cleared} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.PC_Red_Alloy} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.PC_Rig_2} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.PC_GPU_Slot} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.PC_GPU_MBoard} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.PC_Glass_Frosted} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.PC_Fan_Gray} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.PC_Stainless} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.PC_Magnetic_Metal} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.PC_RAM} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.PC_Plastic_Color} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.PC_RGB} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.PC_Heat_Sink} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.PC_MB_Ports} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.PC_Rig} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.Screen} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['Persian_walnut_PBR_texture_seamless.001']} />
          <mesh geometry={nodes.Object_39.geometry} material={materials.white_paint} />
          <mesh geometry={nodes.Object_40.geometry} material={materials['black_plastic.001']} />
          <mesh geometry={nodes.Object_41.geometry} material={materials.black_plastic} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['metal.002']} />
          <mesh geometry={nodes.Object_43.geometry} material={materials.MSI_Grau} />
          <mesh geometry={nodes.Object_44.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Object_45.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Object_46.geometry} material={materials.MSI_Grau_Back} />
          <mesh geometry={nodes.Object_47.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Object_48.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Object_49.geometry} material={materials.Persian_walnut_PBR_texture_seamless} />
          <mesh geometry={nodes.Object_50.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_51.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_52.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_53.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_54.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_55.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_56.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_57.geometry} material={materials.black_plactic} />
          <mesh geometry={nodes.Object_58.geometry} material={materials.outline} />
          <mesh geometry={nodes.Object_59.geometry} material={materials.outline} />
          <mesh geometry={nodes.Object_60.geometry} material={materials.outline} />
          <mesh geometry={nodes.Object_61.geometry} material={materials.outline} />
          <mesh geometry={nodes.Object_62.geometry} material={materials.outline} />
          <mesh geometry={nodes.Object_63.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_64.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_65.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_66.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_67.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_68.geometry} material={materials.black_skin} />
          <mesh geometry={nodes.Object_69.geometry} material={materials.black_skin} />
        </group>
      </group>
    )
  }
  useGLTF.preload('/models/3dmodels/gaming_setup/Gaming_setup.gltf')


  export default Gaming_setup;