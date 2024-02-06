import { Flex } from "@chakra-ui/react";
import SearchHeader from "../components/SearchHeader";
import SearchBarAndDisplay from "../components/SearchBarAndDisplay";
import { useLocation } from "react-router-dom";
import ScrollButton from "../components/ScrollButton";

const Search = () => {
  const location = useLocation();
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <SearchHeader />
      <SearchBarAndDisplay homeInputSearch={location} />
      <ScrollButton />
    </Flex>
  );
};

export default Search;
