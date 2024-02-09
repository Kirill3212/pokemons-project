import { useState } from "react";

import {
  Grid,
  Heading,
  Flex,
  Text,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import pokeballHeartActive from "../../assets/pokeballHeartActive.png";

import { Link } from "react-router-dom";

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
  const [cardsToShow, setCardsToShow] = useState(15);

  return (
    <VStack width={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Heading
        fontSize={"22px"}
        mb={"10px"}
        mt={"35px"}
        textTransform={"capitalize"}
        color={"darkgray"}
      >
        {pokemonsData.name}
      </Heading>

      {pokemonsData.pokemons.length > 1 ? (
        <VStack width={"100%"} justifyContent={"center"}>
          <Flex
            justifyContent={{ base: "center", md: "left", lg: "left" }}
            width={"100%"}
          >
            <Link to=".">
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
            </Link>
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
            {pokemonsData.pokemons.map(
              (pokemon: Pokemons, i) =>
                i <= cardsToShow && (
                  <PokemonCard
                    key={pokemon.pokemon.name}
                    pokemonData={pokemon.pokemon}
                    invokedPage={"Search"}
                  />
                )
            )}
          </Grid>
        </VStack>
      ) : null}

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
    </VStack>
  );
};

export default PokemonSuggestionsCardsList;
