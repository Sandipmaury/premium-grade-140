import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loding = () => {
    const loading  =  useSelector((store) => store.recipeReducer.loading);
    const mealLoading=useSelector((store)=>store.MealDataReducer.isLoading)
    const isLoading=useSelector((store) => store.AuthReducer.isLoding);
  return (
    <Modal isCentered isOpen={loading || isLoading || mealLoading}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles />
        </Flex>
      </ModalContent>
    </Modal>
  );
};