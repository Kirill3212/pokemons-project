import { useState } from "react";
import { Flex, VStack, Image, Text, Button } from "@chakra-ui/react";
import notFound from "../assets/notFound.png";
import sleepingText from "../assets/sleepingText.png";
import { useNavigate } from "react-router";

const NotFound = () => {
  const [sleeping, setSleeping] = useState(false);
  const navigate = useNavigate();

  const showSleeping = () => {
    setSleeping(true);
    setTimeout(() => {
      setSleeping(false);
    }, 2000);
  };

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      <VStack position={"relative"}>
        {sleeping && (
          <Image
            src={sleepingText}
            width={"70px"}
            position={"absolute"}
            right={"10px"}
            top={"-40px"}
          />
        )}
        <Image
          src={notFound}
          width={"300px"}
          cursor={"pointer"}
          onMouseOver={showSleeping}
        />
        <Text fontWeight={"bold"}>Sorry, There is no such page &#128517;</Text>
        <Button mt={"10px"} onClick={() => navigate("/")}>
          Go Home{" "}
        </Button>
      </VStack>
    </Flex>
  );
};

export default NotFound;
