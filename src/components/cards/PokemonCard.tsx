import { useEffect, useState } from "react";

import { GridItem, Image, Heading, Button, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import pokeballHeartActive from "../../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";

import { SinglePokemonResponse } from "../../types/pokemonData";
import { SinglePokemonData } from "../../types/pokemonData";

import { useAppDispatch, useAppSelector } from "../../hooks";

import useShowToast from "../../hooks/useShowToast";

import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/slices/favoritesSlice";
import { getFavoritesSelector } from "../../store/slices/favoritesSlice";
import { getAuthStatusSelector } from "../../store/slices/userSlice";

interface PokemonCardProps {
  pokemon: SinglePokemonResponse;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonData>();
  const [isLiked, setIsLiked] = useState(false);
  const favoritePokemons = useAppSelector(getFavoritesSelector);
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useShowToast();

  const mainImage = pokemonData?.sprites.other.dream_world.front_default;
  const backupImage = pokemonData?.sprites.front_default;

  const dataToPass = {
    data: pokemonData,
    invokePage: "Home",
  };

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData(res);
        if (isAuthorized) checkIfIsLiked(res);
      });
  }, []);

  const checkIfIsLiked = (res: SinglePokemonData) => {
    const pokemonIsLiked = favoritePokemons.some(
      (pokemon) => pokemon.id == res.id
    );
    if (pokemonIsLiked) {
      setIsLiked(true);
    }
  };

  const handleAddToFavorites = () => {
    if (isAuthorized) {
      setIsLiked(!isLiked);
      isLiked
        ? dispatch(deleteFromFavorites(pokemonData?.id))
        : dispatch(addToFavorites(pokemonData));
    } else toast("Sorry :(", "Need to sign in", "error");
  };

  return (
    <GridItem
      flexDirection={"column"}
      boxShadow={"0px 0px 3px grey"}
      m={2}
      p={5}
      borderRadius={10}
    >
      <Flex
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
        borderRadius={5}
        p={2}
      >
        <Heading
          fontSize={20}
          textAlign={"left"}
          textTransform={"capitalize"}
          color={"#F6C52E"}
          ml={2}
        >
          {pokemonData?.name}
        </Heading>

        {isLiked ? (
          <Image
            cursor={"pointer"}
            width={"20px"}
            src={pokeballHeartActive}
            onClick={() => handleAddToFavorites()}
          />
        ) : (
          <Image
            cursor={"pointer"}
            width={"20px"}
            src={pokeballHeartNotActive}
            bg={"yellow.300"}
            borderRadius={"50%"}
            onClick={() => handleAddToFavorites()}
          />
        )}
      </Flex>
      <Image
        src={mainImage ? mainImage : backupImage}
        backgroundImage={
          "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
        }
        borderRadius={8}
        boxSize="170px"
        mt={4}
        mb={4}
      ></Image>
      <Button
        w={"100%"}
        onClick={() =>
          isAuthorized
            ? navigate("/SingleCard", { state: dataToPass })
            : toast("Sorry :(", "Need to sign in", "error")
        }
      >
        Show more
      </Button>
    </GridItem>
  );
};

export default PokemonCard;
