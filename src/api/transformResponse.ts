import { SinglePokemonCardResponse } from "../types/pokemonData";

export function transformSinglePokemon (responseData: SinglePokemonCardResponse) {
    if(!responseData){
        throw new Error('Response is incorrect')
    }

    return {
        id: responseData.id,
        experience: responseData.base_experience,
        name: responseData.name,
        type: responseData.types[0].type.name,
        height: responseData.height,
        weight: responseData.weight,
        attacks: responseData.moves.map((move: string) => move.move.name),
        // Images
        mainImage: responseData.sprites.other.dream_world.front_default,
        backupImage: responseData.sprites.front_default,
        animatedImage: responseData.sprites.other.showdown.front_default,
    }
}



