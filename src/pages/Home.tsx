import { Flex } from "@chakra-ui/react";
import SearchHeader from "../components/SearchHeader";
import PokemonCardsList from "../components/cardsLists/PokemonCardsList";
import SearchBarHomePage from "../components/SearchBarHomePage";

const Home = () => {
  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <SearchHeader />
      <SearchBarHomePage />
      <PokemonCardsList />
    </Flex>
  );
};

export default Home;
