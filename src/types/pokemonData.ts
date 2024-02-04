export interface SinglePokemonResponse {
    name: string,
    url: string
}

export interface SinglePokemonCardResponse {
    abilities: [],
    base_experience: number,
    forms: [],
    game_indices: [],
    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encounter: string,
    moves: [],
    name: string,
    order: number,
    past_abilities: [],
    past_types: [],
    species: Object,
    sprites: TSprites,
    stats: [],
    types: [],
    weight: number
}

export interface PokemonTypeResponse {
    damage_relations: Object,
    game_indices: [],
    generation: Object,
    id: number,
    move_damage_class: Object,
    moves: [],
    name: string,
    names: Object,
    past_damage_relations: [],
    pokemon: []
}

export interface SinglePokemonData {
    id: number
    attacks: string[],
    experience: number,
    height: number,
    weight: number,
    name: string,
    type: string[],
    // Images
    mainImage: string,
    backupImage: string,
    animatedImage: string,
}

// Sprites
export type TSprites = {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
    other: TSpritesInner,
}
export type TSpritesInner = {
    dream_world: TSpriresDreamWorld,
    showdown: TSpriresShowDown,
}
export type TSpriresDreamWorld = {
    front_default: string,
    front_female: string,
}
export type TSpriresShowDown = {
    front_default: string,
}