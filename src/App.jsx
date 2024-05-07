import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import './index.css'
import { Mushroom } from './components/Mushroom.jsx'
import { OrbitControls } from '@react-three/drei'
import { AmbientLight } from 'three'
import Content from './components/Content.jsx'
import ParallaxComponent from './components/ParallaxComponent.jsx'
import Butterfly from './components/Butterfly.jsx'
import Flowers from './components/Flowers.jsx'

const App = () => {
  return (
    // <Canvas className='container'>
    //   <Suspense>
    //   <Experience/>
    //   </Suspense>
    // </Canvas>
    <div style={{backgroundColor:'#010014', height:'100vh'}}>
    {/* <Canvas className='canvas-container'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1}/>
      <Butterfly scale={1.1} />
    </Canvas> */}
    <ParallaxComponent/>
    </div>
  )
}

export default App
