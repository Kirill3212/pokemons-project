import { useState } from "react";
import { VStack, Image } from "@chakra-ui/react";
import loadingSearch from "../../assets/loadingSearch.gif";
import meowText from "../../assets/meowText.png";

const SingleCardKitty = () => {
  const [meow, setMeow] = useState(false);

  const showMeow = () => {
    setMeow(true);
    setTimeout(() => {
      setMeow(false);
    }, 2000);
  };

  return (
    <VStack position={"relative"}>
      {meow && (
        <Image
          src={meowText}
          width={"30px"}
          position={"absolute"}
          right={"55px"}
        />
      )}
      <Image
        src={loadingSearch}
        width={"75px"}
        cursor={"pointer"}
        onMouseOver={showMeow}
      />
    </VStack>
  );
};

export default SingleCardKitty;
