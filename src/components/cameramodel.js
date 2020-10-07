import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useRender} from "react-three-fiber"
import {ModelWrapper} from './styledcomponents';

extend({ OrbitControls })

const SpaceShip = () => {
  const [model, setModel] = useState()

  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel)
  },[])

  return model ? <primitive object={model.scene} /> : null
}

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useRender(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
      enablePan={false}
      enableZoom={false}
    />
  )
}




const DDDModel= () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div>
      <ModelWrapper>

{isBrowser && (
        <Canvas
          camera={{ position: [0, 0, 160] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}    
        >
             <fog attach="fog" args={["white", 40, 650]} />
          <ambientLight intensity={2} />
          <spotLight position={[-100, 60, 180]} penumbra={0.5} castShadow />
        
          <Controls />
    
          <SpaceShip />
        </Canvas>
      )}


      </ModelWrapper>
    </div>
  )
}
export default DDDModel;