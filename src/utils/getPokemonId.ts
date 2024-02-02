export const getPokemonId = (pokemonUrl: string) => {
    const parts = pokemonUrl.split("/");
    return parts[parts.length - 2];
  }