import { useState } from "react";

import { Image, Heading, Flex, Text, Grid } from "@chakra-ui/react";

import collectionEmpty from "../../assets/collectionEmpty.png";
import releaseAll from "../../assets/releaseAll.png";
import pokeball from "../../assets/pokeball.gif";

import { useAppSelector, useAppDispatch } from "../../hooks";

import { useNavigate } from "react-router-dom";

import PokemonFavoriteCard from "../cards/PokemonFavoriteCard";

import { getFavoritesSelector } from "../../store/slices/favoritesSlice";
import { clearFavorites } from "../../store/slices/favoritesSlice";

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
              justifyContent={{ base: "center", md: "right", lg: "right" }}
              justifySelf={"center"}
              alignItems={"center"}
              width={"100%"}
              mb={2}
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
                cursor={"pointer"}
                width={"16px"}
                ml={4}
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
            justifyItems={"center"}
            position={"relative"}
          >
            {favorites &&
              favorites.map((pokemon) => (
                <PokemonFavoriteCard key={pokemon.id} pokemon={pokemon} />
              ))}
          </Grid>
        </Flex>
      ) : (
        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={6}
        >
          <Image
            src={collectionEmpty}
            width={{ base: "80px", md: "110px", lg: "110px" }}
            mb={"10px"}
          ></Image>
          <Heading
            fontSize={{ base: "13px", md: "15px", lg: "20px" }}
            fontWeight={"23px"}
            textAlign={"center"}
          >
            It looks empty &#128517; let's add pokemons to your collection.
            <Text
              ml={2}
              as={"span"}
              color={"#F6C52E"}
              fontWeight={"bold"}
              cursor={"pointer"}
              transition={"0.3s"}
              _hover={{ color: "red.500" }}
              onClick={() => goForPokemons()}
            >
              Catch Pokemons
            </Text>
          </Heading>
          {isThrown ? (
            <Image
              src={pokeball}
              mt={"30px"}
              width={{ base: "150px", md: "220px", lg: "250px" }}
              ml={{ base: "50px", md: "120px", lg: "220px" }}
            />
          ) : null}
        </Flex>
      )}
    </>
  );
};

export default PokemonFavoriteCardsList;
