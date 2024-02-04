import { useState } from "react";

import {
  Grid,
  Skeleton,
  Image,
  Text,
  Flex,
  VStack,
  Divider,
} from "@chakra-ui/react";
import errorLoading from "../../assets/errorLoading.gif";
import pokeballHeartActive from "../../assets/pokeballHeartActive.png";

import { SinglePokemonResponse } from "../../types/pokemonData";

import { useGetPokemonsQuery } from "../../api/api";

import PokemonCard from "../cards/PokemonCard";

const PokemonCardsList = () => {
  const [cardsToShow, setCardsToShow] = useState(20);
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useGetPokemonsQuery(cardsToShow);

  return (
    <VStack>
      <Grid
        mt={10}
        gap={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        position={"relative"}
        justifyItems={"center"}
      >
        {isLoading && (
          <>
            <Skeleton height={"325px"} width={"230px"} borderRadius={10} />
            <Skeleton height={"325px"} width={"230px"} borderRadius={10} />
            <Skeleton height={"325px"} width={"230px"} borderRadius={10} />
            <Skeleton height={"325px"} width={"230px"} borderRadius={10} />
          </>
        )}

        {isError && (
          <Flex
            flexDirection={"column"}
            position={"absolute"}
            width={"320px"}
            alignItems={"center"}
          >
            <Text fontSize={{ base: 14, md: 18, lg: 21 }} mb={7}>
              Oops! Something went wrong &#128531;
            </Text>
            <Image
              src={errorLoading}
              width={{ base: "160px", md: "200px", lg: "250px" }}
            ></Image>
          </Flex>
        )}

        {pokemons &&
          pokemons.results.map((pokemon: SinglePokemonResponse) => (
            <PokemonCard
              key={pokemon.name}
              pokemonData={pokemon}
              invokedPage={"Home"}
            />
          ))}
      </Grid>

      {!isError && !isLoading && (
        <Flex
          mt={6}
          width={{ base: "200px", md: "350px", lg: "400px" }}
          alignItems={"center"}
        >
          <Divider orientation="horizontal" mr={3} borderWidth="1px" />
          <Image
            src={pokeballHeartActive}
            cursor={"pointer"}
            mt={5}
            transition={"0.3s"}
            _hover={{ transform: "scale(1.2)" }}
            width={"30px"}
            onClick={() => setCardsToShow(cardsToShow + 8)}
            pb={4}
          ></Image>
          <Divider
            orientation="horizontal"
            color={"red"}
            ml={3}
            borderWidth="1px"
          />
        </Flex>
      )}
    </VStack>
  );
};

export default PokemonCardsList;
