import { useState } from "react";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

const SearchBarHomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      </form>
    </Flex>
  );
};

export default SearchBarHomePage;