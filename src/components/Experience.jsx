import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import { degToRadian } from '../utils/degToRadian'

const Experience = () => {
  return (
    <>
    <PerspectiveCamera makeDefault position={[0,1,10]}/>
    <OrbitControls/>
      <mesh position={[0,0.5,0]}>
        <sphereGeometry args={[0.5,64,64]}/>
        <meshStandardMaterial/>
      </mesh>

      <mesh rotation={[-(degToRadian(90)),0,0]}>
        <planeGeometry args={[5,5]}/>
        <meshStandardMaterial color='#0000ff'/>
      </mesh>

      <ambientLight args={["#ffffff",1]}/>
    </>
  )
}

export default Experience
