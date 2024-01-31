import { Flex, Heading, Image } from "@chakra-ui/react";

import searchRight from "../assets/searchRight.png";
import searchLeft from "../assets/searchLeft.png";

const SearchHeader = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Image
        src={searchLeft}
        width={{ base: "40px", md: "50px", lg: "70px" }}
        mr={5}
      />
      <Heading fontSize={{ base: 20, md: 30, lg: 38 }} color={"#F6C52E"}>
        P O K E M O N S
      </Heading>
      <Image
        src={searchRight}
        width={{ base: "40px", md: "50px", lg: "70px" }}
        ml={5}
      />
    </Flex>
  );
};

export default SearchHeader;
