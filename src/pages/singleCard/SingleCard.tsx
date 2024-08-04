import { useEffect } from "react";

import { Image, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";
import pokeballHeartActive from "../../assets/pokeballHeartActive.png";

import SingleCardImage from "./SingleCardImage";
import SingleCardStats from "./SingleCardStats";
import SingleCardAttacks from "./SingleCardAttacks";
// import SingleCardKitty from "./SingleCardKitty";

import { useParams, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";

import { getAuthStatusSelector } from "../../store/slices/userSlice";

import { useGetPokemonByNameOrIdQuery } from "../../api/api";

import { useCheckIfIsLikedAndAddToFavorites } from "../../hooks/useCheckIfIsLikedAndAddToFavorites";

const SingleCard = () => {
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const { isLiked, checkIfIsLiked, handleAddToFavorites } =
    useCheckIfIsLikedAndAddToFavorites();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data: pokemon } = useGetPokemonByNameOrIdQuery(id);

  useEffect(() => {
    if (isAuthorized) {
      checkIfIsLiked(pokemon);
    }
  });

  return (
    <VStack>
      {pokemon && (
        <Flex
          width={'"100%"'}
          mt={"50px"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"30px"}
          flexDirection={"column"}
          position={"relative"}
        >
          <Flex
            width={{ base: "240px", md: "400px", lg: "400px" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={"-14px"}
          >
            <Flex
              alignItems={"center"}
              cursor={"pointer"}
              color={"red.400"}
              transition={"0.2s"}
              _hover={{ color: "red.600" }}
              onClick={() => navigate(-1)}
              mb={"25px"}
            >
              <ArrowBackIcon mr={2} />
              <Text>
                {location.state === "Home" || location.state == null
                  ? `Back Home`
                  : `Back to ${location.state}`}
              </Text>
            </Flex>
            {/* <SingleCardKitty /> */}
          </Flex>
          <Flex
            boxShadow={"0px 0px 3px grey"}
            borderRadius={10}
            m={2}
            p={3}
            gap={5}
            display={{ base: "column", md: "flex", lg: "flex" }}
            width={{ base: "240px", md: "400px", lg: "400px" }}
          >
            <VStack>
              {/* Header of the Card */}
              <Flex
                justifyContent={"center"}
                width={"100%"}
                alignItems={"center"}
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
                <Flex
                  gap={3}
                  justifyContent={"center"}
                  mt={{ base: 3, md: 0, lg: 0 }}
                  mb={{ base: 3, md: 0, lg: 0 }}
                  ml={5}
                >
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
              </Flex>

              <SingleCardImage pokemon={pokemon} />
            </VStack>
            <Flex
              flexDirection={"column"}
              width={"200px"}
              pl={{ base: "35px", md: 0, lg: 0 }}
            >
              <SingleCardStats pokemon={pokemon} />
              <SingleCardAttacks pokemon={pokemon} />
            </Flex>
          </Flex>
        </Flex>
      )}
    </VStack>
  );
};

export default SingleCard;
