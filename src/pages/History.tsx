import { useState } from "react";

import { Flex, Image, Heading, Button, VStack, Text } from "@chakra-ui/react";

import pokeballHistory from "../assets/pokeballHistory.png";
import runningPikachu from "../assets/runningPikachu.gif";
import historyEmpty2 from "../assets/historyEmpty2.png";
import pokeball from "../assets/pokeball.gif";
import booText from "../assets/booText.png";

import { useNavigate } from "react-router";

import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";

import { clearHistory } from "../store/slices/historySlice";
import { getHistorySelector } from "../store/slices/historySlice";

const History = () => {
  const [isThrown, setIsThrown] = useState(false);
  const [boo, setBoo] = useState(false);
  const history = useAppSelector(getHistorySelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goForPokemons = () => {
    setIsThrown(true);
    setTimeout(() => {
      navigate("/Search");
    }, 1800);
  };

  const showBoo = () => {
    setBoo(true);
    setTimeout(() => {
      setBoo(false);
    }, 2000);
  };

  // console.log(history);
  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      {/* Header */}
      <Flex alignItems={"center"} mt={{ base: 0, md: -5, lg: "-60px" }}>
        <Heading
          fontSize={{ base: 20, md: 30, lg: 38 }}
          textAlign={"center"}
          color={"#F6C52E"}
          letterSpacing={5}
        >
          Your Catching
        </Heading>
        <VStack position={"relative"} mb={8}>
          {boo && (
            <Image
              src={booText}
              width={"30px"}
              position={"absolute"}
              top={{ base: "3px", md: "10px", lg: "20px" }}
              right={{ base: "-10px", md: "-2px", lg: "5px" }}
            />
          )}
          <Image
            width={{ base: "50px", md: "60px", lg: "70px" }}
            top={{ base: "22px", md: "26px", lg: "32px" }}
            position={"relative"}
            cursor={"pointer"}
            src={runningPikachu}
            onMouseOver={showBoo}
          />
          <Image
            width={{ base: "80px", md: "100px", lg: "130px" }}
            src={pokeballHistory}
          />
        </VStack>
        <Heading color={"red.500"} fontSize={{ base: 20, md: 30, lg: 38 }}>
          History
        </Heading>
      </Flex>

      <VStack position={"relative"}>
        {/* History */}
        {history.length ? (
          <VStack>
            <Flex
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              flexWrap={"wrap"}
              maxW={"600px"}
            >
              {history.map((item, index) => (
                <Text key={index} ml={2} mr={2} cursor={"pointer"}>
                  {item}
                </Text>
              ))}
            </Flex>
            {history.length ? (
              <Button
                mb={4}
                mt={3}
                size={"sm"}
                onClick={() => dispatch(clearHistory())}
              >
                Clear history
              </Button>
            ) : null}
          </VStack>
        ) : (
          <VStack>
            <Image
              width={{ base: "90px", md: "110px", lg: "110px" }}
              src={historyEmpty2}
            />
            <Text
              fontSize={{ base: "13px", md: "15px", lg: "20px" }}
              fontWeight={"23px"}
              textAlign={"center"}
            >
              Haven't chased pokemons yet ? Let's
              <Text
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
                transition={"0.3s"}
                cursor={"pointer"}
                color={"#F6C52E"}
                as={"span"}
                ml={2}
                mr={2}
                onClick={() => goForPokemons()}
              >
                Catch
              </Text>
              some &#128516;
            </Text>
          </VStack>
        )}

        {history.length && (
          <Text
            as={"span"}
            color={"#F6C52E"}
            cursor={"pointer"}
            fontWeight={"bold"}
            transition={"0.3s"}
            _hover={{ color: "red.500" }}
            onClick={() => goForPokemons()}
          >
            Catch More Pokemons
          </Text>
        )}

        {isThrown ? (
          <Image
            src={pokeball}
            ml={{ base: "120px", md: "150px", lg: "180px" }}
            width={"200px"}
            height={"60px"}
            mt={"25px"}
          ></Image>
        ) : null}
      </VStack>
    </Flex>
  );
};

export default History;
