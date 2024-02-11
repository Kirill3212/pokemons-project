import { useEffect } from "react";

import PropTypes from "prop-types";

import { Image, Heading, Button, Flex, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import pokeballHeartActive from "../../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";

import { SinglePokemonData } from "../../types/pokemonData";

import { useAppSelector } from "../../hooks";

import { useCheckIfIsLikedAndAddToFavorites } from "../../hooks/useCheckIfIsLikedAndAddToFavorites";

import { getAuthStatusSelector } from "../../store/slices/userSlice";

interface PokemonCardSearchProps {
  pokemon: SinglePokemonData;
}

const PokemonCardSearch = ({ pokemon }: PokemonCardSearchProps) => {
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const { isLiked, checkIfIsLiked, handleAddToFavorites } =
    useCheckIfIsLikedAndAddToFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      checkIfIsLiked(pokemon);
    }
  }, []);

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
        src={pokemon.mainImage ? pokemon.mainImage : pokemon.backupImage}
        boxSize={{ base: "150px", md: "150px", lg: "180px" }}
        alt={pokemon.name}
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
            {pokemon.name}
          </Heading>
          {isLiked ? (
            <Image
              cursor={"pointer"}
              width={"23px"}
              src={pokeballHeartActive}
              onClick={() => handleAddToFavorites(pokemon)}
            />
          ) : (
            <Image
              cursor={"pointer"}
              width={"23px"}
              src={pokeballHeartNotActive}
              bg={"yellow.300"}
              borderRadius={"50%"}
              onClick={() => handleAddToFavorites(pokemon)}
            />
          )}
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#6F45B9"}>
            Experience:
          </Text>
          <Text ml={2}>{pokemon.experience}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#24B6C8"}>
            Height:
          </Text>
          <Text ml={2}>{pokemon.height}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={500} color={"#DE843A"}>
            Weight:
          </Text>
          <Text ml={2}>{pokemon.weight}</Text>
        </Flex>
        <Button
          mt={{ base: 3, md: 0, lg: 0 }}
          w={"100%"}
          onClick={() =>
            navigate(`/SingleCard/${pokemon.id}`, { state: "Search" })
          }
        >
          Show more
        </Button>
      </Flex>
    </Flex>
  );
};

PokemonCardSearch.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    experience: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null]).isRequired,
    ]),
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    // Images
    mainImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]).isRequired,
    ]),
    backupImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]).isRequired,
    ]),
    animatedImage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]).isRequired,
    ]),
  }),
};

export default PokemonCardSearch;
