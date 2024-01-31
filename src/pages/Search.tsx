import { Flex } from "@chakra-ui/react";
import SearchHeader from "../components/SearchHeader";
import SearchBarAndDisplay from "../components/SearchBarAndDisplay";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <SearchHeader />
      <SearchBarAndDisplay homeInputSearch={location} />
    </Flex>
  );
};

export default Search;
