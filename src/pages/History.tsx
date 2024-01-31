import { Flex, Image, Heading, Button } from "@chakra-ui/react";
import historySide from "../assets/historySide.png";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { clearHistory } from "../store/slices/historySlice";
import { getHistorySelector } from "../store/slices/historySlice";

const History = () => {
  const history = useAppSelector(getHistorySelector);
  const dispatch = useAppDispatch();
  console.log(history);
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
          Your Catching History
        </Heading>
      </Flex>
      {history.length ? (
        <Button mb={4} size={"sm"} onClick={() => dispatch(clearHistory())}>
          Clear history
        </Button>
      ) : null}
      {history.length ? (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>Lets catch some pokemons</div>
      )}
    </Flex>
  );
};

export default History;
