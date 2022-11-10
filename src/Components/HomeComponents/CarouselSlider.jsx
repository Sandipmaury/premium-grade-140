import React from 'react'
import Carousel from '../Slider'
import Carousel1 from '../Slider2'
import { Box } from "@chakra-ui/react";

export const CarouselSlider = () => {
  return (
    <Box style={{ display: "flex", margin: "auto" }}>
    <Carousel />
    <Carousel1 />
  </Box>
  )
}
