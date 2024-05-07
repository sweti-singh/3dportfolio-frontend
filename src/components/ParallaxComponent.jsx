import React, { Suspense, useEffect, useRef } from "react";
import "../css/parallax.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AmbientLight } from 'three'
import Content from './Content.jsx'
import Butterfly from './Butterfly.jsx'
import Flowers from './Flowers.jsx'
import Projects from "./Projects.jsx";
import MyExperience from "./MyExperience.jsx";
import Connect from "./Connect.jsx";
import About from "./About.jsx";
import { useScroll } from "@react-spring/three";
import { animated } from "@react-spring/three";

const ParallaxComponent = () => {
  const { scrollYProgress } = useScroll()
  const parallaxRef = useRef(null)


  return (
    <div className="image-container">
      <Parallax pages={5} style={{ left: 0 }} ref={parallaxRef} >
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }} style={{position:"absolute", opacity:'0.5', zIndex:'-2'}}>
          <div>
            <img src="../../public/stars.jpg" style={{objectFit:"cover"}}/>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0} speed={0.45}>
          <div className="container"></div>
        </ParallaxLayer> */}

        <ParallaxLayer offset={0} speed={0.001}>
          <Content />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <Suspense fallback='null'>
          <Canvas className="canvas-container">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Flowers />
            {/* <Mushroom scale={1.1} /> */}
            <Butterfly scale={0.3} />
          </Canvas>
          </Suspense>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.01}>
          <div className="vines1">
            <img src="../public/vines.png" />
          </div>
          <div className="vines2">
            <img src="../public/vines.png" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45}>
          <div className="bushes1">
            <img src="../public/cartoon-bush.webp" />
          </div>
          <div className="bushes2">
            <img src="../public/cartoon-bush.webp" />
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={2.5}>
         
        </ParallaxLayer> */}
        <ParallaxLayer offset={1} speed={0.45}>
          <Projects/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.45}>
          <MyExperience/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.45}>
          <About/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.45}>
          <Connect/>
        </ParallaxLayer>
      </Parallax>
      {/* <img src='../public/cartoon-bush.webp'/>
    <img src='../public/cartoon-bush.webp'/> */}
    </div>
  );
};

export default ParallaxComponent;
