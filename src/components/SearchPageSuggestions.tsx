import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import searchSuggestion from "../assets/searchSuggestion.png";

const SearchPageSuggestions = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex flexDirection={"column"} mt={"60px"} alignItems={"center"}>
        <Image
          src={searchSuggestion}
          width={{ base: "90px", md: "110px", lg: "130px" }}
          mb={2}
        ></Image>
        <Heading fontSize={{ base: 13, md: 16, lg: 19 }} textAlign={"center"}>
          Don't know which pokemon you want to catch ?
        </Heading>
      </Flex>
      <Text mt={14} textAlign={"center"}>
        Suggestions bar
      </Text>
    </Flex>
  );
};

export default SearchPageSuggestions;
