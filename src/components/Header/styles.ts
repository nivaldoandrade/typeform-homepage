import { motion } from 'framer-motion';
import styled from 'styled-components';


export const Container = styled(motion.header)`
    position: fixed;
    width: 100%;
    height: 100px;
    background: rgba(0,0,0,.1);

    top: 0;
    z-index: 99999;
`;