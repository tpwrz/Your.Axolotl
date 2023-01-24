import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import './content.scss';
import Scrollable from "./Scrollable";
import Test from "./Test";
import Bubbles from './../../pics/bubbles.png'

function Content() {


    return (
        <>
            {<a className="header" href="#top">YOUR.AXOLOTL</a>}
            {/*    <div className="header">YOUR.AXOLOTL</div> */}
{/* 
{
            <Scrollable />} */}
        <div style={{height:'100vh', 
        backgroundColor: 'transparent' }}>Here is some content</div>
        </>
    );
}

export default Content;