import { GridItem, Image, Heading, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SinglePokemonResponse } from "../types/pokemonData";
import { SinglePokemonData } from "../types/pokemonData";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../store/slices/favoritesSlice";

interface PokemonCardProps {
  pokemon: SinglePokemonResponse;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const favPokemons = useAppSelector((state) => state.FAVORITES.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData(res);
        checkIfIsLiked(res);
      });
  }, []);

  const checkIfIsLiked = (res: SinglePokemonData) => {
    const pokemonIsLiked = favPokemons.some((pokemon) => pokemon.id == res.id);
    if (pokemonIsLiked) {
      setIsLiked(true);
    }
  };

  const handleAddToFavorites = () => {
    setIsLiked(!isLiked);
    isLiked
      ? dispatch(deleteFromFavorites(pokemonData.id))
      : dispatch(addToFavorites(pokemonData));
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
        // border={"1px solid lightgrey"}
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
          <FaHeart
            cursor={"pointer"}
            color={"red"}
            fontSize={"18px"}
            onClick={() => handleAddToFavorites()}
          />
        ) : (
          <FaRegHeart
            cursor={"pointer"}
            fontSize={"18px"}
            onClick={() => handleAddToFavorites()}
          />
        )}
      </Flex>
      <Image
        src={pokemonData?.sprites.front_default}
        boxSize="170px"
        backgroundImage={
          "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
        }
        mt={4}
        mb={4}
        borderRadius={8}
      ></Image>
      <Button w={"100%"}>Show more</Button>
    </GridItem>
  );
};

export default PokemonCard;
