import { Flex, UnorderedList, ListItem } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex height={"15vh"} width={"100%"} lineHeight={"1.3"}>
      <UnorderedList
        display={"inline-grid"}
        gridAutoFlow={{
          base: "row",
          sm: "column",
          md: "column",
        }}
        justifyItems={"center"}
        margin={"auto"}
        gridGap={"24px"}
        pb={{ base: "30px", sm: "0px", md: "0px" }}
      >
        <ListItem>
          <a href="#" target="blank">
            Twitter
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.linkedin.com/" target="blank">
            Linkedin
          </a>
        </ListItem>
        <ListItem>
          <a href="https://github.com/Kirill3212" target="blank">
            Github
          </a>
        </ListItem>
        <ListItem>
          <a href="https://t.me/kir_55_1" target="blank">
            Telegram
          </a>
        </ListItem>
        <ListItem>
          <a
            style={{
              color: "gray",
              background:
                "linear-gradient(to right, #ff0000, #ffff00, #00ff00)",
              backgroundClip: "text",
            }}
            href="/Developer"
            target="blank"
          >
            Developer
          </a>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default Footer;
