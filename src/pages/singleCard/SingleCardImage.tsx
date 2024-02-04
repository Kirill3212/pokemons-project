import { Flex, Image } from "@chakra-ui/react";
import { SinglePokemonData } from "../../types/pokemonData";

interface SingleCardImageProps {
  pokemon: SinglePokemonData;
}

const SingleCardImage = ({ pokemon }: SingleCardImageProps) => {
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
    </Flex>
  );
};

export default SingleCardImage;
