import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/RecipeReducer/recipe.actions";

function Pagination() {
  const [searchParams, setSearchparams] = useSearchParams();
  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);
  let initialCategory = searchParams.get("category");
  const initialTitle = searchParams.get("title");

  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((store) => store.recipeReducer);

  useEffect(() => {
    const params = { page: page, limit: 6 };
    if (initialCategory) {
      params.category = initialCategory;
    }
    if (initialTitle) {
      params.q = initialTitle;
    }
    setSearchparams(params);
    dispatch(getRecipe(params));
  }, [page, dispatch]);

  const prev = (
    <Button
      colorScheme={"green"}
      disabled={page === 1}
      onClick={() => setPage(+page - 1)}
    >
      {" "}
      Prev{" "}
    </Button>
  );
  const next = (
    <Button
      colorScheme={"green"}
      disabled={page === numberOfPages}
      onClick={() => setPage(+page + 1)}
    >
      {" "}
      Next{" "}
    </Button>
  );

  const pages = new Array(numberOfPages).fill(0).map((a, i) => (
    <Button
      key={i}
      background={"white"}
      color={"Blue"}
      onClick={() => setPage(i + 1)}
      disabled={page === i + 1}
    >
      {i + 1}
    </Button>
  ));

  return (
    <div>
      <Flex justifyContent={"space-between"} flexFlow={"row"}>
        <Box>
          <Text fontSize={"18px"}>Page : {pages}</Text>
        </Box>

        <Box>
          {prev} {next}
        </Box>
      </Flex>
    </div>
  );
}

export default Pagination;
