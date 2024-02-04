import { useEffect } from "react";

import {
  GridItem,
  Image,
  Heading,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import pokeballHeartActive from "../../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";

import { SinglePokemonResponse } from "../../types/pokemonData";

import { useAppSelector } from "../../hooks";

import { useShowToast } from "../../hooks/useShowToast";

import { useCheckIfIsLikedAndAddToFavorites } from "../../hooks/useCheckIfIsLikedAndAddToFavorites";

import { getAuthStatusSelector } from "../../store/slices/userSlice";

import { useGetPokemonByNameOrIdQuery } from "../../api/api";

import { getPokemonId } from "../../utils/getPokemonId";

interface PokemonCardProps {
  pokemonData: SinglePokemonResponse;
  invokedPage: string;
}

const PokemonCard = ({ pokemonData, invokedPage }: PokemonCardProps) => {
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const navigate = useNavigate();
  const toast = useShowToast();
  const { isLiked, checkIfIsLiked, handleAddToFavorites } =
    useCheckIfIsLikedAndAddToFavorites();

  const pokemonId = getPokemonId(pokemonData.url);
  const { data: pokemon } = useGetPokemonByNameOrIdQuery(pokemonId);

  // Data to SinglePage
  const dataToPass = {
    data: pokemon,
    invokePage: invokedPage,
  };

  useEffect(() => {
    if (isAuthorized) checkIfIsLiked(pokemon);
  });

  return (
    <VStack>
      {pokemon && (
        <GridItem
          minW={"210px"}
          flexDirection={"column"}
          boxShadow={"0px 0px 3px grey"}
          m={2}
          p={5}
          borderRadius={10}
        >
          <>
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
                {pokemon.name}
              </Heading>

              {isLiked ? (
                <Image
                  cursor={"pointer"}
                  width={"20px"}
                  src={pokeballHeartActive}
                  onClick={() => handleAddToFavorites(pokemon)}
                />
              ) : (
                <Image
                  cursor={"pointer"}
                  width={"20px"}
                  src={pokeballHeartNotActive}
                  bg={"yellow.300"}
                  borderRadius={"50%"}
                  onClick={() => handleAddToFavorites(pokemon)}
                />
              )}
            </Flex>
            <Image
              src={pokemon.mainImage ? pokemon.mainImage : pokemon.backupImage}
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
          </>
        </GridItem>
      )}
    </VStack>
  );
};

export default PokemonCard;
