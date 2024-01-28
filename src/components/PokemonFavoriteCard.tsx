import { GridItem, Image, Heading, Button, Box } from "@chakra-ui/react";
import { IoMdCloseCircle } from "react-icons/io";

import { useNavigate } from "react-router";
import { useAppDispatch } from "../hooks";
import { deleteFromFavorites } from "../store/slices/favoritesSlice";

const PokemonFavoriteCard = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const dataToPass = {
    data: pokemon,
    invokePage: "Favorites",
  };

  return (
    <GridItem
      flexDirection={"column"}
      boxShadow={"0px 0px 3px grey"}
      m={2}
      p={1}
      borderRadius={10}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={"8px"}
        right={"8px"}
        cursor={"pointer"}
        onClick={() => dispatch(deleteFromFavorites(pokemon.id))}
      >
        <IoMdCloseCircle color="red" size={"18px"} />
      </Box>
      <Image
        src={
          pokemon?.sprites.other.dream_world.front_default
            ? pokemon?.sprites.other.dream_world.front_default
            : pokemon?.sprites.front_default
        }
        boxSize="150px"
        backgroundImage={
          "linear-gradient(to bottom, #ffffff, #ffecff, #ffd3da, #ffd27d, #f8ef09)"
        }
        mb={4}
        borderRadius={8}
      ></Image>
      <Heading
        fontSize={15}
        textAlign={"center"}
        textTransform={"capitalize"}
        color={"#F6C52E"}
        ml={2}
      >
        {pokemon.name}
      </Heading>

      <Button
        w={"100%"}
        mt={3}
        size={"sm"}
        onClick={() => navigate("/SingleCard", { state: dataToPass })}
      >
        Show more
      </Button>
    </GridItem>
  );
};

export default PokemonFavoriteCard;
