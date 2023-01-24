import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import * as S from './scrollable.styles';


function Scrollable() {
    const scrollContainerRef = useRef<null | HTMLDivElement>(null);
    return (
        <S.ScrollContainer ref={scrollContainerRef}>
            <S.Wrapper initial="initial" animate="animate">
                <div style={{height:'50px', backgroundColor:'red'}}>
                    
                </div>
            </S.Wrapper>
        </S.ScrollContainer>
    );
}

export default Scrollable;