import { Flex, Image, Heading } from "@chakra-ui/react";
import historySide from "../assets/historySide.png";
import { useAppSelector } from "../hooks";
import { getHistorySelector } from "../store/slices/historySlice";

const History = () => {
  const history = useAppSelector(getHistorySelector);

  return (
    <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
      <Flex alignItems={"center"} mt={{ base: 0, md: -5, lg: -8 }} mb={10}>
        <Image
          src={historySide}
          width={{ base: "70px", md: "85px", lg: "100px" }}
          mr={5}
        />
        <Heading
          fontSize={{ base: 20, md: 30, lg: 38 }}
          color={"#F6C52E"}
          letterSpacing={5}
          textAlign={"center"}
        >
          You tried to catch
        </Heading>
      </Flex>
      {history.length ? (
        <div>Here is the history</div>
      ) : (
        <div>Lets catch some pokemons</div>
      )}
    </Flex>
  );
};

export default History;
