import { Grid, Text } from "@chakra-ui/react";

import { useGetPokemonsQuery } from "../api/api";

import PokemonCard from "./PokemonCard";

import { SinglePokemonResponse } from "../types/pokemonData";

const PokemonCardsList = () => {
  const { data: pokemons, isLoading, isError } = useGetPokemonsQuery(12);

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
    >
      {isLoading && (
        <Text mt={"100px"} position={"absolute"}>
          Loading...
        </Text>
      )}
      {isError && (
        <Text mt={"100px"} position={"absolute"}>
          Error
        </Text>
      )}

      {pokemons?.results &&
        pokemons.results.map((pokemon: SinglePokemonResponse) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </Grid>
  );
};

export default PokemonCardsList;
