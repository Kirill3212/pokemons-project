import { Grid, Skeleton, Image, Text, Flex } from "@chakra-ui/react";
import { SinglePokemonResponse } from "../types/pokemonData";
import errorLoading from "../assets/errorLoading.gif";
import { useGetPokemonsQuery } from "../api/api";
import PokemonCard from "./PokemonCard";

const PokemonCardsList = () => {
  const { data: pokemons, isLoading, isError } = useGetPokemonsQuery(16);

  return (
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

      {pokemons?.results &&
        pokemons.results.map((pokemon: SinglePokemonResponse) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </Grid>
  );
};

export default PokemonCardsList;
