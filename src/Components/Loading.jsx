import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loding = () => {
    const loading  =  useSelector((store) => store.recipeReducer.loading);
    

  return (
    <Modal isCentered isOpen={loading}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles />
        </Flex>
      </ModalContent>
    </Modal>
  );
};