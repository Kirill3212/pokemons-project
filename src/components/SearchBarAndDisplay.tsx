import { useState } from "react";

import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  VStack,
  Text,
  Image,
  Tooltip,
  useQuery,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TbBulb } from "react-icons/tb";
import loadingSearch from "../assets/loadingSearch.gif";

import { useGetPokemonByNameQuery } from "../api/api";

import { updateHistory } from "../store/slices/historySlice";
import { useAppDispatch } from "../hooks";

import { useDebounce } from "../hooks/useDebounce";

import SearchPageSuggestions from "./SearchPageSuggestions";
import PokemonCardSearch from "./cards/PokemonCardSearch";

// interface SearchBarProps {
//   hash: string;
//   key: string;
//   pathname: string;
//   search: string;
//   state: string;
// }

const SearchBarAndDisplay = ({ homeInputSearch }) => {
  // console.log(homeInputSearch);
  const [searchInput, setSearchInput] = useState(homeInputSearch.state);
  const debouncedSearchInput = useDebounce(searchInput, 500);
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useGetPokemonByNameQuery(
    debouncedSearchInput || null
  );

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchInput(searchInput);

    if (!isError && !isLoading && data) {
      dispatch(updateHistory(searchInput));
    }
  };

  return (
    <Flex flexDirection={"column"} alignItems={"center"} mb={"40px"}>
      <Flex width={{ base: "300px", md: "400px", lg: "500px" }} mt={5}>
        <form onSubmit={handleSearch} style={{ width: "100%" }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              value={searchInput}
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
              label="You can write a number from 0 to 1064 or just pokemon's name, for example charizard :) Also from 10001 to 10277 are unique pokemons ! Have fun :)"
              borderRadius={5}
              p={2}
            >
              <Text fontSize={"13px"}>Help</Text>
            </Tooltip>
            <TbBulb size={15} />
          </Flex>
        </form>
      </Flex>
      <VStack>
        {isError && <SearchPageSuggestions />}
        {isLoading && <Image src={loadingSearch} mt={"40px"} width={"150px"} />}
        {data && !isError && !isLoading && (
          <Grid mt={8}>
            <GridItem>
              <PokemonCardSearch pokemon={data} />
            </GridItem>
          </Grid>
        )}
      </VStack>
    </Flex>
  );
};

export default SearchBarAndDisplay;
