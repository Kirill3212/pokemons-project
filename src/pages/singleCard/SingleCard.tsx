import { useState, useEffect } from "react";

import { Image, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ArrowBackIcon } from "@chakra-ui/icons";

import pokeballHeartNotActive from "../../assets/pokeballHeartNotActive.png";
import pokeballHeartActive from "../../assets/pokeballHeartActive.png";
import loadingSearch from "../../assets/loadingSearch.gif";
import meowText from "../../assets/meowText.png";

import SingleCardImage from "./SingleCardImage";
import SingleCardStats from "./SingleCardStats";

import { useNavigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../../hooks";

import { getAuthStatusSelector } from "../../store/slices/userSlice";

import { useCheckIfIsLikedAndAddToFavorites } from "../../hooks/useCheckIfIsLikedAndAddToFavorites";

const SingleCard = () => {
  const [attackPosition, setAttackPosition] = useState(0);
  const [meow, setMeow] = useState(false);
  const location = useLocation();
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const navigate = useNavigate();
  const { isLiked, checkIfIsLiked, handleAddToFavorites } =
    useCheckIfIsLikedAndAddToFavorites();

  // Data of Pokemon Sender (PokemonCard, PokemonCardSearch, PokemonFavoriteCard)
  const pokemon = location.state.data;
  const invokedPage = location.state.invokePage;

  useEffect(() => {
    if (isAuthorized) {
      checkIfIsLiked(pokemon);
    }
  });

  const showMeow = () => {
    setMeow(true);
    setTimeout(() => {
      setMeow(false);
    }, 2000);
  };

  // Slider of Attacks
  const changeAttackForwards = () => {
    let next = attackPosition;
    if (next >= pokemon.attacks.length - 1) {
      setAttackPosition(0);
    } else setAttackPosition(next + 1);
  };
  const changeAttackBackwards = () => {
    let prev = attackPosition;
    if (prev <= 0) {
      setAttackPosition(pokemon.attacks.length - 1);
    } else setAttackPosition(prev - 1);
  };

  return (
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
          onClick={() =>
            navigate(invokedPage == "Home" ? "/" : "/" + invokedPage)
          }
        >
          <ArrowBackIcon mr={2} />
          <Text>
            {invokedPage === "Home"
              ? `Back ${invokedPage}`
              : `Back to ${invokedPage}`}
          </Text>
        </Flex>
        <VStack position={"relative"}>
          {meow && (
            <Image
              src={meowText}
              width={"30px"}
              position={"absolute"}
              right={"55px"}
            />
          )}
          <Image
            src={loadingSearch}
            width={"75px"}
            cursor={"pointer"}
            onMouseOver={showMeow}
          />
        </VStack>
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
          <Flex justifyContent={"center"} width={"100%"} alignItems={"center"}>
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

          {/*Attack Slider */}
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
                {pokemon.attacks[attackPosition]}
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
