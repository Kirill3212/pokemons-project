import { Image, Heading, Flex, Text, Grid } from "@chakra-ui/react";
import { useState } from "react";
import collectionEmpty from "../assets/collectionEmpty.png";
import pokeball from "../assets/pokeball.gif";

import { useAppSelector } from "../hooks";

import { useNavigate } from "react-router-dom";

import PokemonFavoriteCard from "./PokemonFavoriteCard";

const PokemonFavoriteCardsList = () => {
  const favorites = useAppSelector((state) => state.FAVORITES.favorites);
  const [isThrown, setIsThrown] = useState(false);
  const navigate = useNavigate();

  const goForPokemons = () => {
    setIsThrown(true);
    setTimeout(() => {
      navigate("/");
    }, 1800);
  };

  return (
    <>
      {favorites.length ? (
        <Grid
          mt={3}
          gap={5}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          position={"relative"}
          justifyItems={"center"}
        >
          {favorites &&
            favorites.map((pokemon) => (
              <PokemonFavoriteCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </Grid>
      ) : (
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={-2}
        >
          <Image
            src={collectionEmpty}
            width={{ base: "80px", md: "110px", lg: "130px" }}
          ></Image>
          <Heading
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            textAlign={"center"}
          >
            It looks empty &#128517; let's add pokemons to your collection.
            <Text
              as={"span"}
              color={"#F6C52E"}
              ml={2}
              cursor={"pointer"}
              onClick={() => goForPokemons()}
              textDecoration={"underline"}
            >
              Catch Pokemons
            </Text>
          </Heading>
          {isThrown ? (
            <Image
              src={pokeball}
              width={{ base: "150px", md: "220px", lg: "320px" }}
              ml={{ base: "50px", md: "120px", lg: "220px" }}
            />
          ) : null}
        </Flex>
      )}
    </>
  );
};

export default PokemonFavoriteCardsList;
