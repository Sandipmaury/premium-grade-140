import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { AllRoute } from "./routes/Routes";

export default function App() {
  return (
    <Box w="100%">
      <Nav />
      <AllRoute />
      <Footer />
    </Box>
  );
}
