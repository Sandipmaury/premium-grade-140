import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "./Components/Nav";

import { AllRoutes } from "./routes/AllRoutes";

export default function App() {
  return (
    <Box w="100%">
      <Nav/>
      <AllRoutes />
      
    </Box>
  );
}
