import Particles from "react-tsparticles"
import particlesConfig from "./Config/particles-config"
import React from "react"
import { loadFull } from "tsparticles";



export default function ParticlesBg() {

    const particlesInit = async (main) => {
        console.log(main);
     
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
     
      const particlesLoaded = (container) => {
        console.log(container);
      };

  return (
        <Particles init={particlesInit} loaded={particlesLoaded} params={particlesConfig}/>    
      );
}