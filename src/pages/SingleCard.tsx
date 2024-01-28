import { useState, useEffect } from "react";
import { Image, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import pokeballHeartActive from "../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../assets/pokeballHeartNotActive.png";
import { SinglePokemonData } from "../types/pokemonData";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getFavoritesSelector } from "../store/slices/favoritesSlice";
import { getAuthStatusSelector } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../store/slices/favoritesSlice";

const SingleCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [attackPosition, setAttackPosition] = useState(0);
  const location = useLocation();
  const pokemon = location.state.data;
  const favPokemons = useAppSelector(getFavoritesSelector);
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const attacks = pokemon?.moves.map((move: string) => move.move.name);

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
    } else navigate("/SignUp");
  };

  const changeAttackForwards = () => {
    let next = attackPosition;
    if (next >= attacks.length - 1) {
      setAttackPosition(0);
    } else setAttackPosition(next + 1);
  };
  const changeAttackBackwards = () => {
    let prev = attackPosition;
    if (prev <= 0) {
      setAttackPosition(attacks.length - 1);
    } else setAttackPosition(prev - 1);
  };

  return (
    <Flex
      width={'"100%"'}
      mt={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
      mb={"50px"}
      flexDirection={"column"}
    >
      <Flex
        width={{ base: "240px", md: "400px", lg: "400px" }}
        alignItems={"center"}
        mb={4}
        color={"red.400"}
        cursor={"pointer"}
        transition={"0.2s"}
        _hover={{ color: "red.600" }}
        onClick={() =>
          navigate(
            location.state.invokePage == "Home"
              ? "/"
              : "/" + location.state.invokePage
          )
        }
      >
        <ArrowBackIcon mr={2} />
        <Text>Back to {location.state.invokePage}</Text>
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
          <Flex justifyContent={"center"} width={"100%"} alignItems={"center"}>
            <Heading
              fontSize={20}
              textAlign={"left"}
              textTransform={"capitalize"}
              color={"#F6C52E"}
              ml={2}
            >
              {pokemon?.name}
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
          </Flex>
          <Flex
            borderRadius={10}
            backgroundImage={
              "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
            }
            boxSize={{ base: "150px", md: "180px", lg: "200px" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={
                pokemon?.sprites.other.showdown.front_default
                  ? pokemon?.sprites.other.showdown.front_default
                  : pokemon?.sprites.front_default
              }
              borderRadius={8}
              width={{ base: "50%", md: "50%", lg: "55%" }}
              height={{ base: "50%", md: "50%", lg: "55%" }}
            ></Image>
          </Flex>
        </VStack>
        <Flex
          flexDirection={"column"}
          width={"200px"}
          pl={{ base: "35px", md: 0, lg: 0 }}
        >
          <VStack height={"50%"} alignItems={"left"} mt={7}>
            <Flex>
              <Text fontWeight={500} color={"#83C785"}>
                Type:
              </Text>
              <Text ml={2}>{pokemon?.types[0].type.name}</Text>
            </Flex>
            <Flex>
              <Text fontWeight={500} color={"#6F45B9"}>
                Experience:
              </Text>
              <Text ml={2}>{pokemon?.base_experience}</Text>
            </Flex>
            <Flex>
              <Text color={"#24B6C8"} fontWeight={500}>
                Height:
              </Text>
              <Text ml={2}> {pokemon?.height}</Text>
            </Flex>
            <Flex>
              <Text color={"#DE843A"} fontWeight={500}>
                Weight:
              </Text>
              <Text ml={2}> {pokemon?.weight}</Text>
            </Flex>
          </VStack>
          <VStack
            mt={{ base: "5px", md: 0, lg: 0 }}
            mb={{ base: "15px", md: 0, lg: 0 }}
            pr={{ base: "22px", md: 0, lg: 0 }}
          >
            <Text color="red.500" fontWeight={600} mt={3}>
              Attacks
            </Text>
            <Flex
              justifyContent={"space-around"}
              alignItems={"center"}
              width={"100%"}
              bg={"purple.600"}
              borderRadius={6}
            >
              <ArrowLeftIcon
                cursor={"pointer"}
                color="#F6C52E"
                width={"13px"}
                transition={"0.2s"}
                _hover={{ color: "yellow.500" }}
                onClick={changeAttackBackwards}
              />
              <Text pb={1} userSelect={"none"} color={"red.300"}>
                {attacks[attackPosition]}
              </Text>
              <ArrowRightIcon
                cursor={"pointer"}
                color="#F6C52E"
                width={"13px"}
                transition={"0.2s"}
                _hover={{ color: "yellow.500" }}
                onClick={changeAttackForwards}
              />
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleCard;
