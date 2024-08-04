import { SinglePokemonCardResponse } from "../types/pokemonData";
import { PokemonTypeResponse } from "../types/pokemonData";

export function transformSinglePokemon(
  responseData: SinglePokemonCardResponse
) {
  if (!responseData) {
    throw new Error("Response is incorrect");
  }

  return {
    id: responseData.id,
    experience: responseData.base_experience,
    name: responseData.name,
    type: responseData.types.map(
      (type: { slot: number; type: { name: string; url: string } }) =>
        type.type.name
    ),
    height: responseData.height,
    weight: responseData.weight,
    attacks: responseData.moves.map(
      (move: {
        move: { name: string; url: string };
        version_group_details: string;
      }) => move.move.name
    ),
    cries: {
      latest: responseData.cries.latest,
      legacy: responseData.cries.legacy,
    },
    // Images
    mainImage: responseData.sprites.other.dream_world.front_default,
    backupImage: responseData.sprites.front_default,
    animatedImage: responseData.sprites.other.showdown.front_default,
  };
}

export function transformTypePokemon(responseData: PokemonTypeResponse) {
  if (!responseData) {
    throw new Error("Response is incorrect");
  }
  return {
    id: responseData.id,
    name: responseData.name,
    pokemons: responseData.pokemon,
  };
}
