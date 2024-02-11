import { Flex } from "@chakra-ui/react";
import SearchHeader from "../components/SearchHeader";
import SearchBarAndDisplay from "../components/SearchBarAndDisplay";
import ScrollButton from "../components/ScrollButton";

const Search = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <SearchHeader />
      <SearchBarAndDisplay />
      <ScrollButton />
    </Flex>
  );
};

export default Search;
