import { useState } from "react";
import { Flex, Image, Heading, VStack } from "@chakra-ui/react";
import pokeballHistory from "../../assets/pokeballHistory.png";
import runningPikachu from "../../assets/runningPikachu.gif";
import booText from "../../assets/booText.png";

const HistoryHeader = () => {
  const [boo, setBoo] = useState(false);

  const showBoo = () => {
    setBoo(true);
    setTimeout(() => {
      setBoo(false);
    }, 2000);
  };

  return (
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
  );
};

export default HistoryHeader;
