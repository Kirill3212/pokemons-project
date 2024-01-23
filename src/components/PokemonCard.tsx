import { GridItem, Image, Heading, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { SinglePokemonResponse } from "../types/pokemonData";

interface PokemonCardProps {
  pokemon: SinglePokemonResponse;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData(res);
        console.log(res);
      });
  }, []);

  return (
    <GridItem
      flexDirection={"column"}
      boxShadow={"0px 0px 3px grey"}
      m={2}
      p={5}
      borderRadius={10}
    >
      <Flex
        justifyContent={"space-between"}
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
          {pokemonData?.name}
        </Heading>
        <FaRegHeart cursor={"pointer"} />
      </Flex>
      <Image
        src={pokemonData?.sprites.front_default}
        boxSize="250px"
        bg={"lightgrey"}
        mt={4}
        mb={4}
        borderRadius={8}
      ></Image>
      <Button w={"100%"}>Show more</Button>
    </GridItem>
  );
};

export default PokemonCard;
