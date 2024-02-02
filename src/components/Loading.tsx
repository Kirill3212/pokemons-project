import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import loadingSearch from "../assets/loadingSearch.gif";

const Loading = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack mb={"150px"}>
        <Image src={loadingSearch} mt={"40px"} width={"150px"} />
        <Text fontWeight={"bold"} color={"red.500"}>
          Loading ...
        </Text>
      </VStack>
    </Flex>
  );
};

export default Loading;
