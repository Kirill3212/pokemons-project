import { useState } from "react";
import { VStack, Text, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { SinglePokemonData } from "../../types/pokemonData";

interface SingleCardAttacksProps {
  pokemon: SinglePokemonData;
}

const SingleCardAttacks = ({ pokemon }: SingleCardAttacksProps) => {
  const [attackPosition, setAttackPosition] = useState(0);

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
          {pokemon.attacks.length ? pokemon.attacks[attackPosition] : "Mystery"}
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
  );
};

export default SingleCardAttacks;
