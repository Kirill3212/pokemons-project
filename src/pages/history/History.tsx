import { useState } from "react";

import { Flex, Image, Button, VStack, Text } from "@chakra-ui/react";

import historyEmpty2 from "../../assets/historyEmpty2.png";
import pokeball from "../../assets/pokeball.gif";

import { SinglePokemonData } from "../../types/pokemonData";

import HistoryHeader from "./HistoryHeader";

import { useNavigate } from "react-router";

import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks";

import { clearHistory } from "../../store/slices/historySlice";
import { getHistorySelector } from "../../store/slices/historySlice";

const History = () => {
  const [isThrown, setIsThrown] = useState(false);
  const history = useAppSelector(getHistorySelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uniqueHistory = Array.from(
    new Set(history.map((obj) => JSON.stringify(obj)))
  ).map((str) => JSON.parse(str));

  const goForPokemons = () => {
    setIsThrown(true);
    setTimeout(() => {
      navigate("/Search");
    }, 1800);
  };

  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <HistoryHeader />
      <VStack position={"relative"}>
        {/* History */}
        {uniqueHistory.length ? (
          <VStack>
            <Flex
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              flexWrap={"wrap"}
              maxW={"600px"}
              justifyContent={"center"}
            >
              {uniqueHistory.map((item: SinglePokemonData, index) => (
                <Text
                  ml={2}
                  mr={2}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "yellow.400" }}
                  onClick={() =>
                    navigate(`/SingleCard/${item.id}`, {
                      state: "History",
                    })
                  }
                >
                  {item.name}{" "}
                  <Text
                    as={"span"}
                    color={"blue.500"}
                    transition={"0.3s"}
                    _hover={{ color: "yellow.400" }}
                  >
                    (Index: {item.id})
                  </Text>
                </Text>
              ))}
            </Flex>
            {uniqueHistory.length ? (
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
              width={{ base: "90px", md: "100px", lg: "100px" }}
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

        {uniqueHistory.length && (
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
