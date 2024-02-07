import { useContext } from "react";
import { ErrorMessageContext } from "./Layout";

import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import stumblingPika from "../assets/stumblingPika.gif";

const ErrorMessage = () => {
  const errMessage = useContext(ErrorMessageContext);

  return (
    <VStack width={"100%"} height={"100vh"} justifyContent={"center"}>
      <VStack mb="150px">
        <Image src={stumblingPika} width={"130px"} />
        <Heading fontSize={20} color={"green.600"}>
          {errMessage.header}
        </Heading>
        <Text fontSize={18}>{errMessage.message}</Text>
      </VStack>
    </VStack>
  );
};

export default ErrorMessage;
