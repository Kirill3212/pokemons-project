import { Image, Heading, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pokeballHeartActive from "../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../assets/pokeballHeartNotActive.png";
// import loadingSearch from "../assets/loadingSearch.gif";
import { SinglePokemonData } from "../types/pokemonData";
import { getFavoritesSelector } from "../store/slices/favoritesSlice";
import { getAuthStatusSelector } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../store/slices/favoritesSlice";

interface PokemonCardSearchProps {
  pokemon: SinglePokemonData;
}

const PokemonCardSearch = ({ pokemon }: PokemonCardSearchProps) => {
  const [isLiked, setIsLiked] = useState(false);
  // const [isLoading, setiSLoading] = useState(loading || false);
  // const [isError, setIsError] = useState(error || false);
  // console.log("isLoading from comp -", loading);

  const favPokemons = useAppSelector(getFavoritesSelector);
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const dataToPass = {
    data: pokemon,
    invokePage: "Search",
  };

  useEffect(() => {
    if (isAuthorized) {
      // setiSLoading(false);
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
    } else navigate("/SignUp");
  };

  return (
    <Flex>
      {/* {isLoading && <Image src={loadingSearch} width={"100px"} />} */}
      <Flex
        boxShadow={"0px 0px 3px grey"}
        borderRadius={10}
        m={2}
        p={3}
        gap={5}
        display={{ base: "column", md: "flex", lg: "flex" }}
      >
        <Image
          src={
            pokemon?.sprites.other.dream_world.front_default
              ? pokemon?.sprites.other.dream_world.front_default
              : pokemon?.sprites.front_default
          }
          boxSize={{ base: "150px", md: "150px", lg: "180px" }}
          width={{ base: "70%", md: "50%", lg: "50%" }}
          maxWidth={"170px"}
          backgroundImage={
            "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
          }
          borderRadius={8}
          ml={{ base: 8, md: 0, lg: 0 }}
        ></Image>
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          width={"200px"}
        >
          <Flex
            gap={3}
            justifyContent={"center"}
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
          <Text>Expirience: {pokemon?.base_experience}</Text>
          <Text>Height: {pokemon?.height}</Text>
          <Text>Weight: {pokemon?.weight}</Text>
          <Button
            mt={{ base: 3, md: 0, lg: 0 }}
            w={"100%"}
            onClick={() =>
              isAuthorized
                ? navigate("/SingleCard", { state: dataToPass })
                : navigate("/SignUp")
            }
          >
            Show more
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PokemonCardSearch;
