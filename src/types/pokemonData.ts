export type BaseResponse = {
  name: string;
  url: string;
};

export type SinglePokemonResponse = BaseResponse;

export interface SinglePokemonCardResponse {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounter: string;
  cries: TPokemonCries;
  moves: [];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: TSpecies;
  sprites: TSprites;
  stats: [];
  types: [];
  weight: number;
}

export interface PokemonTypeResponse {
  damage_relations: TDamageRelations;
  game_indices: [];
  generation: TGeneration;
  id: number;
  move_damage_class: TMoveDamageClass;
  moves: [];
  name: string;
  names: object;
  past_damage_relations: [];
  pokemon: [];
}

export interface SinglePokemonData {
  id: number;
  attacks: string[];
  experience: number;
  height: number;
  weight: number;
  name: string;
  type: string[];
  cries: TPokemonCries;
  // Images
  mainImage: string;
  backupImage: string;
  animatedImage: string;
}

// Species
export type TSpecies = BaseResponse;

// Generation
export type TGeneration = BaseResponse;

// Move Damage Class
export type TMoveDamageClass = BaseResponse;

// Cries
export type TPokemonCries = {
  latest: string;
  legacy: string;
};

// Damage Relations
export type TDamageRelations = {
  double_damage_from: BaseResponse[];
  double_damage_to: [];
  half_damage_from: [];
  half_damage_to: BaseResponse[];
  no_damage_from: BaseResponse[];
  no_damage_to: BaseResponse[];
};

// Sprites
export type TSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: TSpritesInner;
};
export type TSpritesInner = {
  dream_world: TSpriresDreamWorld;
  showdown: TSpriresShowDown;
};
export type TSpriresDreamWorld = {
  front_default: string;
  front_female: string;
};
export type TSpriresShowDown = {
  front_default: string;
};
