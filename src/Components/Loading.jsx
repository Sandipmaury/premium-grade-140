import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loding = () => {
  const loading = useSelector((store) => store.recipeReducer.loading);
  const loading1 = useSelector((store) => store.momentReducer.loading);
  const isLoading = useSelector((store) => store.AuthReducer.isLoding);
  const isLoading1 = useSelector((store) => store.MealDataReducer.isLoading);

  return (
    <Modal isCentered isOpen={loading || isLoading || loading1 || isLoading1}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles />
        </Flex>
      </ModalContent>
    </Modal>
  );
};
