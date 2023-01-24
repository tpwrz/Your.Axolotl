import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScrollContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
`;

export const Wrapper = styled(motion.div)`
  margin: 120px auto;
  width: 85%;
  position: relative;
  user-select: none;
  pointer-events: none;
  
`;

Wrapper.defaultProps = {
    variants: {
        initial: {
            opacity: 0,
            y: '5vh',
        },
        animate: {
            opacity: 1,
            y: '0vh',
            transition: {
                delay: 0.3,
                type: 'spring',
                stiffness: 350,
                damping: 80,
                mass: 5,
                restDelta: 0.001,
                restSpeed: 0.001,
            },
        },
    },
};

