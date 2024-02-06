import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import stumblingPika from "../assets/stumblingPika.gif";

const ErrorMessage = () => {
  return (
    <VStack width={"100%"} height={"100vh"} justifyContent={"center"}>
      <VStack mb="150px">
        <Image src={stumblingPika} width={"130px"} />
        <Heading fontSize={20} color={"green.600"}>
          OH Nooo...Oops!
        </Heading>
        <Text fontSize={18}>Sorry, something went wrong there. Try again</Text>
      </VStack>
    </VStack>
  );
};

export default ErrorMessage;
