import { HStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
      <button variant={"unstyled"} style={{color:'white'}}>
        <Link to='/'>Home</Link>
      </button>
      <button variant={"unstyled"} style={{color:'white'}}>
        <Link to='/exchenge'>Exchenge</Link>
      </button>
      <button variant={"unstyled"} style={{color:'white'}}>
        <Link to='/coin'>Coin</Link>
      </button>
    </HStack>


  )
}

export default Header