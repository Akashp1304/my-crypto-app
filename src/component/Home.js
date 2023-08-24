import React from 'react';
import {Box, Image, Text} from '@chakra-ui/react';
import {motion} from "framer-motion"

const Home = () => {
  return (
   <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
     <Text  fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} ><strong>Crypto Market</strong></Text>
    <motion.div style={{
      height:"80vh",
    }}
    animate={{
      translateY:"20px"
    }}
    transition={{
      duration:1,
      repeat:Infinity,
      repeatType:"reverse",
    }}
    >
    <Image  w={"full"}  h={"full"} objectFit={"contain"} src={"https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt='..' />
    </motion.div>
    
   
   </Box>
  )
}

export default Home