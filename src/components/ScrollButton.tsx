import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Flex
      justifyContent={"flex-end"}
      width={"100%"}
      position={"sticky"}
      bottom={"140px"}
    >
      {isVisible && (
        <Text
          cursor={"pointer"}
          mr={{ base: "-3px", md: "30px", lg: "60px" }}
          transition={"0.3s"}
          _hover={{ color: "#F6C52E" }}
        >
          <FaArrowCircleUp onClick={scrollToTop} size={22} />
        </Text>
      )}
    </Flex>
  );
};

export default ScrollButton;
