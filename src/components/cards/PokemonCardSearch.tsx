import { useEffect, useState } from "react";

import { Image, Heading, Button, Flex, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import pokeballHeartActive from "../../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";

import { SinglePokemonData } from "../../types/pokemonData";

import { useAppDispatch, useAppSelector } from "../../hooks";

import useShowToast from "../../hooks/useShowToast";

import { getFavoritesSelector } from "../../store/slices/favoritesSlice";
import { getAuthStatusSelector } from "../../store/slices/userSlice";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/slices/favoritesSlice";

interface PokemonCardSearchProps {
  pokemon: SinglePokemonData;
}

const PokemonCardSearch = ({ pokemon }: PokemonCardSearchProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const favPokemons = useAppSelector(getFavoritesSelector);
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useShowToast();

  const mainImage = pokemon?.sprites.other.dream_world.front_default;
  const backupImage = pokemon?.sprites.front_default;

  const dataToPass = {
    data: pokemon,
    invokePage: "Search",
  };

  useEffect(() => {
    if (isAuthorized) {
      checkIfIsLiked(pokemon);
    }
  });

  const checkIfIsLiked = (pokemon: SinglePokemonData) => {
    const pokemonIsLiked = favPokemons.some((pok) => pok.id == pokemon?.id);
    if (pokemonIsLiked) {
      setIsLiked(true);
    } else setIsLiked(false);
  };

  const handleAddToFavorites = () => {
    if (isAuthorized) {
      setIsLiked(!isLiked);
      isLiked
        ? dispatch(deleteFromFavorites(pokemon?.id))
        : dispatch(addToFavorites(pokemon));
    } else toast("Sorry :(", "Need to sign in", "error");
  };

  return (
    <Flex
      boxShadow={"0px 0px 3px grey"}
      borderRadius={10}
      m={2}
      p={3}
      gap={5}
      display={{ base: "column", md: "flex", lg: "flex" }}
    >
      <Image
        src={mainImage ? mainImage : backupImage}
        boxSize={{ base: "150px", md: "150px", lg: "180px" }}
        maxWidth={"170px"}
        backgroundImage={
          "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
        }
        borderRadius={8}
        ml={{ base: 6, md: 0, lg: 0 }}
      ></Image>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        minW={"200px"}
      >
        <Flex
          gap={3}
          justifyContent={"center"}
          alignItems={"center"}
          mt={{ base: 3, md: 0, lg: 0 }}
          mb={{ base: 3, md: 0, lg: 0 }}
        >
          <Heading
            fontSize={20}
            textAlign={"left"}
            textTransform={"capitalize"}
            color={"#F6C52E"}
            ml={2}
          >
            {pokemon?.name}
          </Heading>
          {isLiked ? (
            <Image
              cursor={"pointer"}
              width={"23px"}
              src={pokeballHeartActive}
              onClick={() => handleAddToFavorites()}
            />
          ) : (
            <Image
              cursor={"pointer"}
              width={"23px"}
              src={pokeballHeartNotActive}
              bg={"yellow.300"}
              borderRadius={"50%"}
              onClick={() => handleAddToFavorites()}
            />
          )}
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#6F45B9"}>
            Experience:
          </Text>
          <Text ml={2}>{pokemon?.base_experience}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#24B6C8"}>
            Height:
          </Text>
          <Text ml={2}>{pokemon?.height}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#DE843A"}>
            Weight:
          </Text>
          <Text ml={2}>{pokemon?.weight}</Text>
        </Flex>
        <Button
          mt={{ base: 3, md: 0, lg: 0 }}
          w={"100%"}
          onClick={() =>
            isAuthorized
              ? navigate("/SingleCard", { state: dataToPass })
              : toast("Sorry :(", "Need to sign in", "error")
          }
        >
          Show more
        </Button>
      </Flex>
    </Flex>
  );
};

export default PokemonCardSearch;
