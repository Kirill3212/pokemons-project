import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TbBulb } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

import { useGetPokemonByNameOrIdQuery } from "../api/api";

import { useDebounce } from "../hooks/useDebounce";

import PokemonCardsList from "./cardsLists/PokemonCardsList";
import PokemonCardSearch from "./cards/PokemonCardSearch";

const SearchBarHomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const debouncedSearchInput = useDebounce(searchInput, 1500);

  const {
    data: pokemon,
    isError,
    isLoading,
    isFetching,
  } = useGetPokemonByNameOrIdQuery(debouncedSearchInput || null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/Search?text=" + searchInput);
  };

  useEffect(() => {
    if (isError && searchInput.length) {
      setErrorMessage("Not found, need to specify full name or id");
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isError]);

  return (
    <VStack>
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
            justifyContent={"space-between"}
            alignItems={"center"}
            color={"green.500"}
            mt={1}
          >
            <Flex>
              {isLoading || isFetching ? (
                <Text fontSize={"13px"} ml={2}>
                  Loading...
                </Text>
              ) : (
                !pokemon && (
                  <Text fontSize={"13px"} color={"red.700"} ml={2}>
                    {errorMessage}
                  </Text>
                )
              )}
            </Flex>
            <Flex cursor={"pointer"}>
              <Tooltip
                hasArrow
                label="You can write a number from 0 to 1064 or just pokemon's full name, for example charizard :) Also from 10001 to 10277 are unique pokemons ! Have fun :)"
                borderRadius={5}
                p={3}
              >
                <Text fontSize={"13px"}>Help</Text>
              </Tooltip>
              <TbBulb size={15} />
            </Flex>
          </Flex>
        </form>
      </Flex>
      <VStack>
        {(!pokemon || isError || isFetching) && <PokemonCardsList />}
        {pokemon && !isError && !isLoading && !isFetching && (
          <Flex mt={8}>
            <PokemonCardSearch pokemon={pokemon} />
          </Flex>
        )}
      </VStack>
    </VStack>
  );
};

export default SearchBarHomePage;
