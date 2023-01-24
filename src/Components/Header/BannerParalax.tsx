import React, { useEffect, useState, useRef } from 'react';
import Banner from './../../pics/water2.jpg'
import Text from './Text'
import Axolotl from './../../pics/axolotl1.png'
import './bannerParalax.scss'
import { Animator, ScrollContainer, ScrollPage, batch, ZoomOut } from "react-scroll-motion";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Scroll from './Scroll';

function BannerParalax() {
    const windowWidth: any = useRef(window.innerWidth);
    const windowHeight = useRef(window.innerHeight);
    console.log(windowHeight);
    const ratio: number = windowWidth / 1800;
    console.log(ratio);
    return (
        <ScrollContainer>
            <div className='banner'>
                <MouseParallaxContainer containerStyle={{
                    width: "100%",
                    height: "100%",

                }}
                    resetOnLeave
                >
                    <MouseParallaxChild
                        factorX={0.03}
                        factorY={0.01}
                        style={{
                            background: `url(${Banner})`,
                            backgroundPositionY: "50%",
                            transform: "scale(1.2)",
                            position: "absolute",
                            filter: "blur(4px) brightness(50%)",
                            backgroundSize: "cover",
                            backgroundRepeat: "repeat",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%"
                        }}
                    />
                     <MouseParallaxChild
                        factorX={0.07}
                        factorY={0.05}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            flexDirection: "column",
                        }} className='mouseParalax'
                    >
                        <ScrollPage style={{
                            display: 'flex',
                            justifyContent: 'center',
                        alignItems:'center',
                        height:'auto,'}}>
                        <Animator animation={batch(ZoomOut(undefined, 0.2))}>
                            <div style={{fontFamily:'Concert One'}} > <Text /></div>
                        </Animator>
                    </ScrollPage>
                    <img className='img' style={{
                        width: '20vw',
                        zIndex: '13',
                        display: 'flex',
                    }} src={Axolotl} alt="axolotl" />

                </MouseParallaxChild> 
            </MouseParallaxContainer>
        </div>
        </ScrollContainer >
    );
}



export default BannerParalax;