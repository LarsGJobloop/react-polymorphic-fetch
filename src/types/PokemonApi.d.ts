/**
 * Full Url type
 */
type Url = string

/**
 * NamedUrl
 */
type NamedUrl = {name: string, url: Url}

/**
 * Response object from the "/pokemon" endpoint
 */
export interface PokemonResponse {
  count: number
  next: URL
  previous: null | URL
  results: {
    name: string
    url: Url
  }[]
}

/**
 * Specific Pokemon Object
 */
interface PokemonDetails {
  abilities: Abilities[],
  base_experience: number,
  forms: NamedUrl[],
  game_indices: GameIndices[],
  height: number,
  held_items: HeldItems[],
  id: number,
  is_default: boolean,
  location_area_encounters: Url,
  moves: Moves[],
  name: string,
  order: number,
  past_types: PastTypes[],
  species: NamedUrl,
  sprites: Sprites,
  stats: Stats[],
  types: Types[],
  weight: number
}

type HeldItems = unknown
type PastTypes = unknown

type Moves = {
  move: NamedUrl
  version_group_details: {
    level_learned_at: number,
    move_learn_method: NamedUrl
  }[]
}

type Sprites = {
  back_defult: Url | null,
  back_female: Url | null,
  back_shiny: Url | null,
  back_shiny_female: Url | null,
  front_defult: Url | null,
  front_female: Url | null,
  front_shiny: Url | null,
  front_shiny_female: Url | null,
  other: Other,
  versions: Versions,
}

type Other = unknown
type Versions = unknown

type Abilities = {
  ability: NamedUrl
  is_hidden: boolean
  slot: number
}

type GameIndices = {
  game_index: number
  version: NamedUrl
}

type Stats = {
  base_stat: number
  effort: number
  stat: NamedUrl
}

type Types = {
  slot: number
  type: NamedUrl
}