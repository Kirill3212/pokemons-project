import { Flex, Image, Text } from "@chakra-ui/react";
import { AiFillSound } from "react-icons/ai";

import { SinglePokemonData } from "../../types/pokemonData";
import { useState } from "react";

interface SingleCardImageProps {
  pokemon: SinglePokemonData;
}

const SingleCardImage = ({ pokemon }: SingleCardImageProps) => {
  const [cry, setCry] = useState(false);

  const handlePlayCry = () => {
    setCry(true);
    setTimeout(() => {
      setCry(false);
    }, 1000);
  };

  return (
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
          pokemon.animatedImage
            ? pokemon.animatedImage
            : pokemon.mainImage
            ? pokemon.mainImage
            : pokemon.backupImage
        }
        width={{ base: "50%", md: "50%", lg: "55%" }}
        height={{ base: "50%", md: "50%", lg: "55%" }}
        borderRadius={8}
        alt={pokemon.name}
      ></Image>
      <Flex
        onClick={handlePlayCry}
        position={"absolute"}
        top={"110px"}
        right={"210px"}
      >
        {cry && <audio src={pokemon.cries.latest} autoPlay={true} />}
        <Text
          cursor={"pointer"}
          transition={"0.3s"}
          _hover={{ color: "gray.500" }}
        >
          <AiFillSound />
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleCardImage;
