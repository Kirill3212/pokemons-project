import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import PokemonCardsList from "../components/PokemonCardsList";

const Home = () => {
  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Heading fontSize={28} color={"#F6C52E"}>
        P O K E M O N S
      </Heading>
      <Flex width={{ base: "300px", md: "400px", lg: "500px" }} mt={15}>
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
