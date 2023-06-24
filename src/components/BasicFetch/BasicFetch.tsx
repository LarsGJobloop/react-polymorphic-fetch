import { useEffect, useState } from "react"
import { basicFetch } from "../../utilities/basicFetch/basicFetch"
import { PokemonResponse } from "../../types/PokemonApi"

export function BasicFetch() {
  // The <Type Argument> here says that pokemonList can be of type 'null' or 'PokemonResponse'
  const [pokemonList, setPokemonList] = useState<PokemonResponse | null>(null)

  useEffect(
    () => {
      basicFetch("https://pokeapi.co/api/v2/pokemon")
        .then(data => setPokemonList(data));
    },
    []
  )

  console.log(pokemonList)

  return (
    <section>
      {
        pokemonList === null
        ? <span>Loading Data..</span>
        : 
        <ul>
          {
            pokemonList.results.map(
              (pokemon) => {
                return (
                  <li key={pokemon.name}>
                    <p>{pokemon.name}</p>
                  </li>
                )
              }
            )
          }
        </ul>
      }
    </section>
  )
}
