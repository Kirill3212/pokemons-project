import { useState } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// import SearchPageSuggestions from "./SearchPageSuggestions";

import { useGetPokemonByNameQuery } from "../api/api";
import { useDebounce } from "../hooks/useDebounce";

import PokemonCardSearch from "./PokemonCardSearch";

const SearchBarAndDisplay = ({ homeInputSearch }: string) => {
  const [searchInput, setSearchInput] = useState(homeInputSearch.state);
  const debouncedSearchInput = useDebounce(searchInput, 500);

  const { data, isLoading, isError } = useGetPokemonByNameQuery(
    debouncedSearchInput || null
  );

  console.log("Loading is -", isLoading);

  return (
    <Flex flexDirection={"column"} alignItems={"center"} mb={"40px"}>
      <Flex width={{ base: "300px", md: "400px", lg: "500px" }} mt={5}>
        <form
          onSubmit={() => console.log("find a pokemon")}
          style={{ width: "100%" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search your pokemon"
              focusBorderColor="yellow.300"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </form>
      </Flex>
      {data && (
        <Grid mt={8}>
          <GridItem>
            {isError && <div>No such pokemon</div>}
            {isLoading && <div>Loading...</div>}
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <PokemonCardSearch pokemon={data} />
            )}
          </GridItem>
        </Grid>
      )}
    </Flex>
  );
};

export default SearchBarAndDisplay;
