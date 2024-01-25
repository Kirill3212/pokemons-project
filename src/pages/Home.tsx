import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import PokemonCardsList from "../components/PokemonCardsList";

import searchRight from "../assets/searchRight.png";
import searchLeft from "../assets/searchLeft.png";

const Home = () => {
  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Flex alignItems={"center"}>
        <Image
          src={searchLeft}
          width={{ base: "40px", md: "50px", lg: "70px" }}
          mr={5}
        />
        <Heading fontSize={{ base: 20, md: 30, lg: 38 }} color={"#F6C52E"}>
          P O K E M O N S
        </Heading>
        <Image
          src={searchRight}
          width={{ base: "40px", md: "50px", lg: "70px" }}
          ml={5}
        />
      </Flex>
      <Flex width={{ base: "300px", md: "400px", lg: "500px" }} mt={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search your pokemon"
            focusBorderColor="yellow.300"
          />
        </InputGroup>
      </Flex>
      <PokemonCardsList />
    </Flex>
  );
};

export default Home;
