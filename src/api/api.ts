import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { transformSinglePokemon } from './transformResponse'

const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2/";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: POKEMON_API_BASE_URL}),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: (limit) => `pokemon?limit=${limit}`,
        }),
        getPokemonByNameOrId: builder.query({
            query: (name) => `pokemon/${name}`,
            transformResponse: transformSinglePokemon
        })
    })
})

export const { useGetPokemonsQuery, useGetPokemonByNameOrIdQuery } = pokemonApi