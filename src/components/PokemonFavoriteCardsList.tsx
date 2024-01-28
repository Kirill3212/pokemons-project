import { useState } from "react";

import {
  Image,
  Heading,
  Flex,
  Text,
  Grid,
  textDecoration,
} from "@chakra-ui/react";

import collectionEmpty from "../assets/collectionEmpty.png";
import releaseAll from "../assets/releaseAll.png";
import pokeball from "../assets/pokeball.gif";

import { useAppSelector, useAppDispatch } from "../hooks";

import { useNavigate } from "react-router-dom";

import PokemonFavoriteCard from "./PokemonFavoriteCard";

import { getFavoritesSelector } from "../store/slices/favoritesSlice";
import { clearFavorites } from "../store/slices/favoritesSlice";

const PokemonFavoriteCardsList = () => {
  const favorites = useAppSelector(getFavoritesSelector);
  const [isThrown, setIsThrown] = useState(false);
  const dispatch = useAppDispatch();
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
        <Flex flexDirection={"column"}>
          {favorites.length > 1 ? (
            <Flex
              alignItems={"center"}
              justifySelf={"center"}
              width={"100%"}
              mb={2}
              justifyContent={{ base: "center", md: "right", lg: "right" }}
            >
              <Text
                ml={3}
                color={"red.400"}
                cursor={"pointer"}
                transition={"0.2s"}
                _hover={{ color: "red.600" }}
                onClick={() => dispatch(clearFavorites())}
              >
                Release all
              </Text>
              <Image
                src={releaseAll}
                width={"16px"}
                ml={4}
                cursor={"pointer"}
              ></Image>
            </Flex>
          ) : null}
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
        </Flex>
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
