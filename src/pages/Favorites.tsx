import { Flex, Image, Heading } from "@chakra-ui/react";
import favoriteCollection from "../assets/favoriteCollection.png";
import PokemonFavoriteCardsList from "../components/cardsLists/PokemonFavoriteCardsList";

const Favorites = () => {
  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        mt={{ base: 0, md: -5, lg: -8 }}
        mb={10}
      >
        <Image
          src={favoriteCollection}
          width={{ base: "150px", md: "200px", lg: "270px" }}
          mr={5}
        />
        <Heading
          fontSize={{ base: 20, md: 30, lg: 38 }}
          color={"#F6C52E"}
          letterSpacing={5}
          textAlign={"center"}
        >
          Your Favorite Collection
        </Heading>
      </Flex>
      <PokemonFavoriteCardsList />
    </Flex>
  );
};

export default Favorites;
