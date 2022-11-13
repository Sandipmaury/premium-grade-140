import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiError } from "react-icons/bi";

export const Error = () => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      m="auto"
      fontSize="150px"
      w="1100px"
      bg="#ffffff"
      color="lightgray"
      py="100px"
    >
      <BiError />
      <Text fontSize="2xl">
        This page is not build yet. Please visit later.
      </Text>
    </Flex>
  );
};
