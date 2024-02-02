import { VStack, Flex, Text } from "@chakra-ui/react";
import { SinglePokemonData } from "../../types/pokemonData";

interface SingleCardStatsProps {
  pokemon: SinglePokemonData;
}

const SingleCardStats = ({ pokemon }: SingleCardStatsProps) => {
  return (
    <VStack height={"50%"} alignItems={"left"} mt={7}>
      <Flex>
        <Text fontWeight={500} color={"#83C785"}>
          Type:
        </Text>
        <Text ml={2}>{pokemon.type[0]}</Text>
      </Flex>
      <Flex>
        <Text fontWeight={500} color={"#6F45B9"}>
          Experience:
        </Text>
        <Text ml={2}>{pokemon.experience}</Text>
      </Flex>
      <Flex>
        <Text color={"#24B6C8"} fontWeight={500}>
          Height:
        </Text>
        <Text ml={2}>{pokemon.height}</Text>
      </Flex>
      <Flex>
        <Text color={"#DE843A"} fontWeight={500}>
          Weight:
        </Text>
        <Text ml={2}>{pokemon.weight}</Text>
      </Flex>
    </VStack>
  );
};

export default SingleCardStats;
