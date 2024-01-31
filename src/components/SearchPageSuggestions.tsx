import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import searchSuggestion from "../assets/searchSuggestion.png";
// import { useEffect } from "react";

const SearchPageSuggestions = () => {
  // useEffect(() => {
  //   async function getdata() {
  //     const response = await fetch("https://pokeapi.co/api/v2/type");
  //     const json = await response.json();

  //     const response2 = await fetch(json.results[0].url);
  //     const json2 = await response2.json();

  //     const response3 = await fetch(json2.pokemon[0].pokemon.url);
  //     const json3 = await response3.json();
  //     console.log(json3);
  //   }

  //   getdata();
  // });

  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
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
      <Flex
        mt={10}
        textAlign={"center"}
        width={"350px"}
        justifyContent={"space-around"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Text
          cursor={"pointer"}
          _hover={{ color: "red.400" }}
          transition={"0.2s"}
        >
          Fire
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "blue.500" }}
          transition={"0.2s"}
        >
          Water
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "green.300" }}
          transition={"0.2s"}
        >
          Grass
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "purple.500" }}
          transition={"0.2s"}
        >
          Poison
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "yellow.300" }}
          transition={"0.2s"}
        >
          Electric
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "blue.200" }}
          transition={"0.2s"}
        >
          Ice
        </Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "brown" }}
          transition={"0.2s"}
        >
          Bug
        </Text>
      </Flex>
    </Flex>
  );
};

export default SearchPageSuggestions;
