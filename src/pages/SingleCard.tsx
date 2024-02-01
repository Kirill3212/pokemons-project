import { useState, useEffect } from "react";

import { Image, Heading, Flex, Text, VStack } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { useNavigate, useLocation } from "react-router-dom";

import pokeballHeartActive from "../assets/pokeballHeartActive.png";
import pokeballHeartNotActive from "../assets/pokeballHeartNotActive.png";
import meowText from "../assets/meowText.png";
import loadingSearch from "../assets/loadingSearch.gif";

import { useAppSelector } from "../hooks";

import { getAuthStatusSelector } from "../store/slices/userSlice";

import { useCheckIfIsLikedAndAddToFavorites } from "../hooks/useCheckIfIsLikedAndAddToFavorites";

const SingleCard = () => {
  const [attackPosition, setAttackPosition] = useState(0);
  const [meow, setMeow] = useState(false);
  const location = useLocation();
  const isAuthorized = useAppSelector(getAuthStatusSelector);
  const navigate = useNavigate();
  const { isLiked, checkIfIsLiked, handleAddToFavorites } =
    useCheckIfIsLikedAndAddToFavorites();

  const pokemon = location.state.data;
  const invokedPage = location.state.invokePage;
  const mainImage = pokemon?.sprites.other.showdown.front_default;
  const backupImage = pokemon?.sprites.front_default;
  const attacks = pokemon?.moves.map((move: string) => move.move.name);

  const pokemonName = pokemon?.name;
  const pokemonType = pokemon?.types[0].type.name;
  const pokemonExperience = pokemon?.base_experience;
  const pokemonHeight = pokemon?.height;
  const pokemonWeight = pokemon?.weight;

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
              {pokemonName}
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

          {/* Image of the Pokemon */}
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
              src={mainImage ? mainImage : backupImage}
              width={{ base: "50%", md: "50%", lg: "55%" }}
              height={{ base: "50%", md: "50%", lg: "55%" }}
              borderRadius={8}
            ></Image>
          </Flex>
        </VStack>
        <Flex
          flexDirection={"column"}
          width={"200px"}
          pl={{ base: "35px", md: 0, lg: 0 }}
        >
          {/* Stats of the Pokemon */}
          <VStack height={"50%"} alignItems={"left"} mt={7}>
            <Flex>
              <Text fontWeight={500} color={"#83C785"}>
                Type:
              </Text>
              <Text ml={2}>{pokemonType}</Text>
            </Flex>
            <Flex>
              <Text fontWeight={500} color={"#6F45B9"}>
                Experience:
              </Text>
              <Text ml={2}>{pokemonExperience}</Text>
            </Flex>
            <Flex>
              <Text color={"#24B6C8"} fontWeight={500}>
                Height:
              </Text>
              <Text ml={2}>{pokemonHeight}</Text>
            </Flex>
            <Flex>
              <Text color={"#DE843A"} fontWeight={500}>
                Weight:
              </Text>
              <Text ml={2}>{pokemonWeight}</Text>
            </Flex>
          </VStack>

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
