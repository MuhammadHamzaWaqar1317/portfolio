import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Cover } from './ui/cover'
function Hero() {
  return (
    <>
    <Spotlight className="absolute"  fill="white"/>
    <Spotlight className="absolute -top-10"  fill="white"/>
    
    
    <div className="flex justify-center items-center flex-col h-screen ">
        <h2 className="uppercase">Crafting Dynamic Web Solutions with Nextjs Expertise</h2>
       <h2>I Build amazing websites
       at  <Cover className="text-2xl text-white"><h2>asdsaddsadsa</h2></Cover> </h2>
      
    </div>
    
    </>
  )
}

export default Hero