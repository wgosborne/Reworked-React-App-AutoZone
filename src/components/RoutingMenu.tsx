import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const RoutingMenu = () => {
  return (
    <Box>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Box>
  );
};

export default RoutingMenu;