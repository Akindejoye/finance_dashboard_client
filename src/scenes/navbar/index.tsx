import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/components/FlexBetween';

interface NavbarProps {
  
}
 
const Navbar = () => {
  const { palette } = useTheme();

  return ( 
    <FlexBetween 
      mb="0.25rem" 
      p='0.5rem 0rem' 
      color={palette.grey[300]}
    >
      Navbar
    </FlexBetween>
   );
}
 
export default Navbar;