import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CarouselSlider } from "../Components/HomeComponents/CarouselSlider";
import { TopGrid } from "../Components/HomeComponents/TopGrid";
import { LatestNews } from "../Components/HomeComponents/LatestNews";
import { Moments } from "../Components/HomeComponents/Moments";
import { Restro } from "../Components/HomeComponents/Restro";
import { Bottom } from "../Components/HomeComponents/Bottom";
import { TextLine } from "../Components/HomeComponents/TextLine";
import { PremiumImage } from "../Components/HomeComponents/PremiumImage";
import { RedButton } from "../Components/HomeComponents/RedButton";

export const HomePage = () => {
  return (
    <div style={{ backgroundColor: "white", width: "100%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(224,224,224,1)",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            width: "1100px",
            margin: "auto",
            backgroundColor: "rgba(224,224,224,1)",
          }}
        >
          <CarouselSlider />
          <TopGrid />
          <LatestNews />
          <Moments />
          <Restro />
        </div>
      </div>

      {/* bottom section   */}

      <div
        style={{
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {/* main 1100px div */}
        <Box bg={"white"} w={"1100px"} margin={"auto"}>
          <TextLine />
          <PremiumImage />

          <Box
            color={"#888888"}
            marginTop={"15px"}
            marginBottom={"40px"}
            display={"flex"}
            fontSize={"26px"}
            justifyContent={"center"}
          >
            Instant coupon & dining. No upfront coupon payment, booking or
            printing.
          </Box>

          <Bottom />

          <Box
            fontSize={"20px"}
            color={"#888888"}
            marginTop={"105px"}
            textAlign={"center"}
          >
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </Box>

          <RedButton />

          <Box m={"auto"} marginTop={"60px"} marginBottom={"60px"}>
            <Text
              textAlign={"center"}
              fontSize={"26px"}
              fontWeight={"bold"}
              color={"#888888"}
            >
              Featured On
            </Text>
            <Image src="https://www.kindmeal.my/images/media-feature2.png" />
          </Box>
        </Box>
      </div>

      <Box w={"1100px"} m={"auto"} bg={"#ececec"}>
        <Image
          w={"100%"}
          m={"auto"}
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
        />
      </Box>
    </div>
  );
};
