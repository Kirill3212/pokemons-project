import { useState } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TbBulb } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { updateHistory } from "../store/slices/historySlice";

const SearchBarHomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateHistory(searchInput));
    navigate("/Search", { state: searchInput });
  };

  return (
    <Flex width={{ base: "300px", md: "400px", lg: "500px" }} mt={5}>
      <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search your pokemon"
            focusBorderColor="yellow.300"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </InputGroup>
        <Flex
          width={"100%"}
          justifyContent={"right"}
          alignItems={"center"}
          cursor={"pointer"}
          color={"green.500"}
          mt={1}
        >
          <Tooltip
            hasArrow
            label="You can write a number from 0 to 1025 or just pokemon's name, for example pikachu :) Also from 10001 to 10277 are unique pokemons ! Have fun :)"
            borderRadius={5}
            p={2}
          >
            <Text fontSize={"13px"}>Help</Text>
          </Tooltip>
          <TbBulb size={15} />
        </Flex>
      </form>
    </Flex>
  );
};

export default SearchBarHomePage;
