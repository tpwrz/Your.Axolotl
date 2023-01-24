import React from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

function Test(){
   

    return (
      <>
        <MouseParallax>
          <p>I'm reacting to mouse move</p>
        </MouseParallax>
    
        <ScrollParallax>
          <p>I'm reacting to scroll</p>
        </ScrollParallax>
      </>
    );
}

export default Test;