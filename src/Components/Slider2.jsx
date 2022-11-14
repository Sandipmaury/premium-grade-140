import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel1() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider /> || null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  // These are the images used in the slide
  const cards = [
    "https://www.kindmeal.my/photos/shop/6/609-4803-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/599-4453-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/537-3973-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/562-4188-m.jpg",
    "https://www.kindmeal.my/photos/shop/5/505-4609-m.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"350px"}
      width={"350px"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"350px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
