import { Grid, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import PokemonCard from "../cards/PokemonCard";

import { SinglePokemonResponse } from "../../types/pokemonData";

interface PokemonCardsSuggestionsProps {
  pokemonsData: {
    id: number;
    name: string;
    pokemons: [];
  };
}

type Pokemons = {
  pokemon: SinglePokemonResponse;
  slot: number;
};

const PokemonSuggestionsCardsList = ({
  pokemonsData,
}: PokemonCardsSuggestionsProps) => {
  return (
    <VStack width={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Heading
        fontSize={"22px"}
        mb={"15px"}
        mt={"25px"}
        textTransform={"capitalize"}
        color={"darkgray"}
      >
        {pokemonsData.name}
      </Heading>

      {pokemonsData.pokemons.length > 1 ? (
        <VStack width={"65%"} justifyContent={"center"}>
          <Flex
            justifyContent={{ base: "center", md: "left", lg: "left" }}
            width={"100%"}
          >
            <Flex
              alignItems={"center"}
              cursor={"pointer"}
              color={"red.400"}
              transition={"0.2s"}
              _hover={{ color: "red.600" }}
            >
              <ArrowBackIcon />
              <Text onClick={() => window.location.reload()} ml={1}>
                Back to Suggestions
              </Text>
            </Flex>
          </Flex>
          <Grid
            mt={3}
            gap={2}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            justifyItems={"center"}
            position={"relative"}
          >
            {pokemonsData.pokemons.map((pokemon: Pokemons) => (
              <PokemonCard
                key={pokemon.pokemon.name}
                pokemonData={pokemon.pokemon}
                invokedPage={"Search"}
              />
            ))}
          </Grid>
        </VStack>
      ) : null}
    </VStack>
  );
};

export default PokemonSuggestionsCardsList;
