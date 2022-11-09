import { Box } from "@chakra-ui/react";
import React from "react";
import Signup from "./routes/Signup";
import { AllRoutes } from "./routes/AllRoutes";

export default function App() {
  return (
    <Box w="100%">
      <AllRoutes />
      <Signup/>
    </Box>
  );
}
