import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2/";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: POKEMON_API_BASE_URL}),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: (limit) => `pokemon?limit=${limit}`,
        }),
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}` 
        })
    })
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi